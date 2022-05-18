import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DeleteResponseInterface } from 'src/interfaces/DeleteResponse.interface';
import { UpdateResponseInterface } from 'src/interfaces/UpdateReponse.interface';
import { Book } from './book.interface';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  @HttpCode(200)
  async getAll(): Promise<Book[]> {
    return this.bookService.getAll();
  }

  @Get('/:id')
  @HttpCode(200)
  async show(@Param('id') id: number) {
    console.log('Controller', id);
    return this.bookService.show(id);
  }

  @Post()
  @HttpCode(201)
  async create(@Body() book: Book): Promise<Book> {
    return this.bookService.create(book);
  }

  @Put('/:id')
  @HttpCode(200)
  async update(
    @Param('id') id: number,
    @Body() book: Book,
  ): Promise<UpdateResponseInterface> {
    console.log('Id', id, 'Body', book);
    return this.bookService.update(id, book);
  }

  @Delete('/:id')
  @HttpCode(200)
  async destroy(@Param('id') id: number): Promise<DeleteResponseInterface> {
    return this.bookService.destroy(id);
  }
}
