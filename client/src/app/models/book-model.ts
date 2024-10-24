import { BaseModelId, IdInterface } from './base-model';

export interface SearchBooksResponse {
  kind: string;
  totalItems: number;
  items: BookResponse[];
}

export interface BookDetailsResponse {
  kind: string;
  volumeInfo: BookInterface;
}

export interface IndustryIdentifier {
  type: string;
  identifier: string;
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

export interface BookResponse {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: any;
  accessInfo: any;
  searchInfo: any;
}

export interface VolumeInfo extends BookResponse {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: IndustryIdentifier[];
  readingModes: any;
  pageCount: number;
  printType: string;
  categories: string[];
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: any;
  imageLinks: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}


export interface BookInterface extends IdInterface {
  title?: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  pageCount?: number;
  categories?: string[];
  coverURL?: string;
}

export class Book extends BaseModelId<BookInterface> implements BookInterface {
  public override id!: string;
  public title?: string;
  public authors?: string[];
  public publisher?: string;
  public publishedDate?: string;
  public description?: string;
  public pageCount?: number;
  public categories?: string[];
  public coverURL?: string;

  constructor(book?: Partial<BookInterface>) {
    super(book);
  }

  public static create(params: Partial<BookInterface>): Book {
    const bookParams: BookInterface = {
      id: params.id!,
      title: params.title,
      authors: params.authors,
      publisher: params.publisher,
      publishedDate: params.publishedDate,
      description: params.description,
      pageCount: params.pageCount,
      categories: params.categories,
      coverURL: params.coverURL,
    };
    const book = new Book(bookParams);
    book.populate(bookParams);
    return book;
  }

  public static createFromGoogleBookResponse(googleBook: BookResponse): Book {
    const bookParams: BookInterface = {
      id: googleBook.id,
      title: googleBook.volumeInfo.title,
      authors: googleBook.volumeInfo.authors,
      publisher: googleBook.volumeInfo.publisher,
      publishedDate: googleBook.volumeInfo.publishedDate,
      description: googleBook.volumeInfo.description,
      pageCount: googleBook.volumeInfo.pageCount,
      categories: googleBook.volumeInfo.categories,
      coverURL: googleBook.volumeInfo.imageLinks?.thumbnail ? googleBook.volumeInfo.imageLinks.thumbnail : 'assets/images/default-book-cover.png',
    };
    const book = new Book(bookParams);
    book.populate(bookParams);
    return book;
  }

  public override populate(params: Partial<BookInterface>): this {
    super.populate(params);
    return this;
  }

  public getAuthors(): string {
    return this.authors ? this.authors.join(', ') : 'Unknown Author';
  }

  public getShortDescription(length: number = 100): string {
    if (!this.description) {
      return 'No description available.';
    }
    return this.description.length > length
      ? this.description.substring(0, length) + '...'
      : this.description;
  }

  public getFormattedPublishedDate(): string {
    if (!this.publishedDate) {
      return 'Unknown Date';
    }
    const date = new Date(this.publishedDate);
    return date.toLocaleDateString();
  }

  // public getCoverURL(): string {
  //   let thumbnail = this.thumbnail;
  //   return this.thumbnail || 'assets/images/default-thumbnail.png';
  // }
}
