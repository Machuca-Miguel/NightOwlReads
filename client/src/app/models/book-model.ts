export interface SearchBooksResponse {
  kind: string;
  totalItems: number;
  items: Book[];
}

export interface BookDetailsResponse {
  kind: string;
  volumeInfo: Book;
}



export interface Book {
  id: string;
  title: string;
  authors: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  pageCount?: number;
  categories?: string[];
  thumbnail?: string;
}
