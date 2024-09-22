import { Book } from "../types/Book";
import BookCard from "./bookCard";

type BookListPros = {
  books: Book[];
};

const BookList = ({ books }: BookListPros) => {
  return (
    <div className="container-fluid mt-4">
      <h1 className="text-center mb-4">Book Recommendations</h1>
      <div className="d-flex flex-row flex-wrap">
        {books.map((book, index) => (
          <div className="col-md-4" key={index}>
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
