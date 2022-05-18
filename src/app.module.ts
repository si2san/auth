import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ABCController } from './abc.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './library/book.controller';
import { Book } from './library/book.entity';
import { BookService } from './library/book.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'auth',
      entities: [Book],
      synchronize: true,
    }),
  ],
  controllers: [AppController, ABCController, BookController],
  providers: [AppService, BookService],
})
export class AppModule {}
