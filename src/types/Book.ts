export interface Book {
  id: string;
  title: string;
  authors: string[];
  imageLinks: {
    thumbnail: string;
  };
  description: string;
  pageCount: number;
  publishedDate: string;
  publisher: string;
  language: string;
  volume: number;
  rating: number;
}
