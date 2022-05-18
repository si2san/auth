import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { Book } from './book.interface';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  @HttpCode(200)
  async findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Post()
  @HttpCode(201)
  async create(@Body() book: Book) {
    return this.bookService.create(book);
  }
}
