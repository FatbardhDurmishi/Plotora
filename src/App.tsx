import { useEffect, useState } from "react";
import "./App.css";
import bookService from "./services/bookService";
import { Book } from "./types/Book";
import BookList from "./components/bookList";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const query = "subject:happy";
      const response = await bookService.fetchBooks(query);
      setBooks(response);
    };

    fetchBooks();
  }, []);
  return (
    <div className="container-fluid m-1 rounded">
      <BookList books={books} />
    </div>
  );
};

export default App;
