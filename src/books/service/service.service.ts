import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../../typeorm/entities/Book.entity';
import { CreateBooksDto } from '../dto/books.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly BooksRepository: Repository<Book>,
  ) {}

  findBooks() {
    return this.BooksRepository.find()
  }

  findBooksByAuthor(authorName: string): Promise<Book[]> {
    return this.BooksRepository.find({ where: { authorName } });
  }

  async create(createBooksDto: CreateBooksDto): Promise<Book> {
    const createdBooks = this.BooksRepository.create(createBooksDto);
    return this.BooksRepository.save(createdBooks);
  }
}