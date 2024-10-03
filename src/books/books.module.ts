import { Module } from '@nestjs/common';
import { BooksController } from './controller/books/books.controller';
import { BooksService } from './service/service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'src/typeorm/entities/Book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
