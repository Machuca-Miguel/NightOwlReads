import { BaseModelId, IdInterface } from './base-model';

export interface SearchBooksResponse {
  kind: string;
  totalItems: number;
  items: BookDetailsResponse[];
}

export interface BookDetailsResponse {
  kind: string;
  volumeInfo: Book;
}

export interface BookInterface extends IdInterface {
  title?: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  pageCount?: number;
  categories?: string[];
  thumbnail?: string;
}

export class Book extends BaseModelId<BookInterface> implements BookInterface {
  title?: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  pageCount?: number;
  categories?: string[];
  thumbnail?: string;

  constructor(book?: Partial<BookInterface>) {
    super();
    if (book) {
      this.id = book.id || '';
      this.title = book.title || '';
      this.authors = book.authors || [];
      this.publisher = book.publisher;
      this.publishedDate = book.publishedDate;
      this.description = book.description;
      this.pageCount = book.pageCount;
      this.categories = book.categories;
      this.thumbnail = book.thumbnail;
    }
  }

  public static create(params: BookInterface): Book {
    const book = new Book(params);
    book.populate(params);
    return book;
  }

  public override populate(params: Partial<BookInterface>): this {
    super.populate(params);
    return this;
  }
}
