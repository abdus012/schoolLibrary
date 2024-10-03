import { Module } from '@nestjs/common';
import { BooksIssueController } from './controller/books/books.controller';
import { BooksIssueService } from './service/service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookIssue } from 'src/typeorm/entities/BookIssue.entity';
import { Book } from 'src/typeorm/entities/Book.entity';
import { Student } from 'src/typeorm/entities/Student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookIssue,Book,Student])],
  controllers: [BooksIssueController],
  providers: [BooksIssueService]
})
export class BooksIssueModule {}
