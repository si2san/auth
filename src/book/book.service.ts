import { Injectable } from '@nestjs/common';
import { Book } from './book.interface';

@Injectable()
export class BookService {
  private readonly books: Book[] = [];

  create(book: Book) {
    console.log(book);
    this.books.push(book);
  }

  findAll(): Book[] {
    return this.books;
  }
}
