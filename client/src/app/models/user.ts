import { UserType } from '../common/enums/user-type';
import { BaseModelId, IdInterface } from './base-model';


export interface UserInterface extends IdInterface {
  name: string | null;
  lastName: string | null;
  alias: string | null;
  email: string | null;
  phone: string | null;
  type: UserType | null;
  image: string | null;
  country: string | null;
  city: string | null;
  socialMedia: string[] | null;
}

export interface UserRegistration {
  email : string,
  password: string,
}

export class User
  extends BaseModelId<UserInterface>
  implements UserInterface
{
  public static create(params: UserInterface): User {
    const user = new User();
    user.populate(params);
    return user;
  }

  public name: string | null = null;
  public lastName: string | null = null;
  public alias: string | null = null;
  public email!: string;
  public phone: string | null = null;
  public type: UserType | null = null;
  public image: string | null = null;
  public country: string | null = null;
  public city: string | null = null;
  public socialMedia: string[] | null = null;

  public override populate(params: Partial<UserInterface>): this {
    super.populate(params);

    return this;
  }

  public fullName(): string {
    const parts: string[] = [];
    if (this.name) {
      parts.push(this.name);
    }
    if (this.lastName) {
      parts.push(this.lastName);
    }
    return parts.join(' ');
  }

  public getInitials(): string {
    const initials: string[] = [];
    if (this.name) {
      initials.push(this.name.charAt(0));
    }
    if (this.lastName) {
      initials.push(this.lastName.charAt(0));
    }
    if (initials.length === 0) {
      if (this.alias) {
        initials.push(this.alias.charAt(0));
      } else {
        initials.push(this.email!.charAt(0));
      }
    }
    return initials.join('').toLocaleUpperCase();
  }

  public isExternal(): boolean {
    return this.type === UserType.EXTERNAL;
  }

  public isSuperUser(): boolean {
    return this.type === UserType.SUPER_USER;
  }

  public getAvatarURL(): string | null {
    return this.image
  }
}
