import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ABCController } from './abc.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Book } from './book/book.entity';
import { BookModule } from './book/book.module';
import { BookService } from './book/book.service';

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
    BookModule,
  ],
  controllers: [AppController, ABCController],
  providers: [AppService, BookService],
})
export class AppModule {}
