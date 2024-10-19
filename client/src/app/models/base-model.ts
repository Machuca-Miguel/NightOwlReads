export abstract class BaseModel<Interface = {}> {
  public static normalize(str: string): string {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  public populate(params: Partial<Interface>, ignoreNulls = true): this {
    for (const param of Object.keys(params)) {
      const propDescriptor = Object.getOwnPropertyDescriptor(this, param);
      if (!propDescriptor || propDescriptor.writable) {
        try {
          // @ts-ignore
          if (!ignoreNulls || params[param] != null) {
            // @ts-ignore
            this[param] = params[param];
          }
        } catch (error: unknown) {
          if (!(error instanceof TypeError)) {
            throw error;
          }
        }
      } else {
        console.warn(param, this.constructor.name, this, params);
      }
    }
    return this;
  }
}

export abstract class BaseModelId<Interface = {}, IdType = string> extends BaseModel<Interface> {
  public id: IdType | null = null;

  public is<T extends BaseModelId>(this: T, other: T | null | undefined): boolean {
    if (!other || other.id === null) {
      return false;
    }
    return this.id === other.id;
  }

  public static arrayToObject<T extends BaseModelId<T>>(list: T[]): Record<string, T> {
    const object: Record<string, T> = {};
    for (const item of list) {
      if (item.id != null) {
        object[item.id] = item;
      }
    }
    return object;
  }

  public static itemExists<T extends BaseModelId>(list: readonly T[], item: T): boolean {
    return list.some(other => other.id === item.id);
  }

  public static removeItemById<T extends BaseModelId>(list: T[], item: T): boolean {
    const index = list.findIndex(other => other.id === item.id);
    if (index !== -1) {
      list.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  public static toggleItemById<T extends BaseModelId>(list: T[], item: T): void {
    if (!this.removeItemById(list, item)) {
      list.push(item);
    }
  }

  public static arrayToMap<T extends BaseModelId>(array: T[]): Map<string, T> {
    return array.reduce((map, entry) => {
      if (entry.id) {
        map.set(entry.id, entry);
      }
      return map;
    }, new Map<string, T>());
  }
}

export abstract class BaseModelIdName<Interface = {}, IdType = string> extends BaseModelId<Interface, IdType> {
  public name: string | null = null;

  public static sort(array: BaseModelIdName[]): void {
    array.sort((aModel, bModel) => aModel.compare(bModel));
  }

  public compare(model: BaseModelIdName): number {
    return (this.name || '').localeCompare(model.name || '');
  }

  public filter(term: string): boolean {
    return this.name != null && BaseModel.normalize(this.name).includes(term);
  }

  public override toString(): string {
    return this.name || '';
  }
}

export interface IdInterface {
  id: string | null;
}

export class Arrays {
  private constructor() {}

  public static remove<T>(list: T[], item: T): boolean {
    const index = list.indexOf(item);
    if (index !== -1) {
      list.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  public static toggle<T>(list: T[], item: T): void {
    if (!this.remove(list, item)) {
      list.push(item);
    }
  }
}
