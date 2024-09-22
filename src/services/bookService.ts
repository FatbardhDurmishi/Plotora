// src/BookService.ts
import axios from "axios";
import { Book } from "../types/Book";
class BookService {
  private API_KEY?: string;

  constructor() {
    this.API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
  }

  public async fetchBooks(query: string): Promise<Book[]> {
    const maxResults = 40;
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${this.API_KEY}&maxResults=${maxResults}`
    );
    const data = await response.data;
    console.log(data);
    return this.transformBooks(data.items);
  }

  private transformBooks(items: any[]): Book[] {
    if (!Array.isArray(items)) {
      throw new Error("Invalid Response");
    }
    return items.map((item) => ({
      id: item.id,
      title: item.volumeInfo?.title || "Title not available",
      authors: item.volumeInfo?.authors || [],
      image: item.volumeInfo?.imageLinks?.thumbnail || "",
      imageLinks: {
        thumbnail: item.volumeInfo?.imageLinks?.thumbnail || "",
      },
      description: item.volumeInfo?.description || "No description available",
      pageCount: item.volumeInfo?.pageCount || 0,
      publishedDate: item.volumeInfo?.publishedDate || "",
      publisher: item.volumeInfo?.publisher || "",
      language: item.volumeInfo?.language || "",
      volume: item.volumeInfo?.volumeInfo || "N/A",
      rating: item.volumeInfo?.averageRating || 0,
    }));
  }
}
const bookService = new BookService();
export default bookService;
