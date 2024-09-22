import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { Book } from "../types/Book";

type BookCardProps = {
  book: Book;
};

const BookCard = ({ book }: BookCardProps) => {
  return (
    <Card style={{ width: "18rem" }} className="mb-4 rounded-2">
      <Card.Img
        variant="top"
        src={book.imageLinks.thumbnail || "https://via.placeholder.com/150"}
        alt={book.title}
      />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          By: {book.authors.join(", ")}
        </Card.Subtitle>
        <Card.Text>{book.description.substring(0, 100) + "..."}</Card.Text>
        <div className="mb-2">
          <Badge bg="primary" className="me-1">
            Volume: {book.volume}
          </Badge>
          <Badge bg="warning" text="dark">
            Rating: {book.rating}
          </Badge>
        </div>
        <Button
          variant="primary"
          href={`https://books.google.com/books?id=${book.id}`}
          target="_blank"
        >
          View More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
