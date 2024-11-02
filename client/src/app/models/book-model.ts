import { LanguageCode, LanguageName } from '../common/enums/language-code';
import { LanguageService } from '../services/language.service';
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
  searchInfo?: any;
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
  language: LanguageCode;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  averageRating: number;
  ratingsCount: number;
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
  rating?: number;
  totalRatings?: number;
  ISBN_10?: string;
  ISBN_13?: string;
  language?: string;
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
  public rating?: number;
  public totalRatings?: number;
  public ISBN_10?: string;
  public ISBN_13?: string;
  public language?: LanguageCode;

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
      language: googleBook.volumeInfo.language,
      coverURL: googleBook.volumeInfo.imageLinks?.thumbnail
      ? googleBook.volumeInfo.imageLinks.thumbnail ||
        googleBook.volumeInfo.imageLinks.smallThumbnail
      : 'assets/images/appImages/book-placeholder.svg',
      rating: googleBook.volumeInfo.averageRating,
      totalRatings: googleBook.volumeInfo.ratingsCount,
      ISBN_10: googleBook.volumeInfo.industryIdentifiers?.find(identifier => identifier.type === 'ISBN_10')?.identifier,
      ISBN_13: googleBook.volumeInfo.industryIdentifiers?.find(identifier => identifier.type === 'ISBN_13')?.identifier,
    };
    const book = new Book(bookParams);
    console.log(book);
    
    book.populate(bookParams);
    return book;
  }

  public override populate(params: Partial<BookInterface>): this {
    super.populate(params);
    return this;
  }

  public getAuthors(): string {
    return this.authors ? this.authors.join(', ') : 'Anonimus';
  }

  public getcategories(): string | null {
    return this.categories ? this.categories.join(' / ') : null;
  }

  public getpublishedDate(): string | null {
    return this.publishedDate?.split('-')[0] || null;
  }

  public getLanguage(): LanguageName | void {
    if (!this.language) return;
    return LanguageService.getLanguageName(this.language);
  }

}
