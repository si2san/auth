import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResponseInterface } from 'src/interfaces/DeleteResponse.interface';
import { UpdateResponseInterface } from 'src/interfaces/UpdateReponse.interface';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { Book as BookInterface } from './book.interface';

@Injectable()
export class BookService {

  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  async getAll(): Promise<BookInterface[]> {
    return this.bookRepository.find();
  }

  async show(id: number): Promise<BookInterface> {
    return this.bookRepository.findOne({ where: { id: id } });
  }

  async create(data: BookInterface): Promise<BookInterface> {
    let book = this.bookRepository.create(data);
    return this.bookRepository.save(book);
  }

  async update(
    id: number,
    data: Partial<BookInterface>,
  ): Promise<UpdateResponseInterface> {
    this.bookRepository.update({ id }, data);

    return {
      updated: true,
    };
  }

  async destroy(id: number): Promise<DeleteResponseInterface> {
    this.bookRepository.delete({ id });

    return {
      deleted: true,
    };
  }
}
