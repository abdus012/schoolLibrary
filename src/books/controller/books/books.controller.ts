
import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { BooksService } from '../../service/service.service';
import { CreateBooksDto } from '../../dto/books.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly BooksService: BooksService) {}

  @Get()
  async getBookss() {
    return await this.BooksService.findBooks();
  }

  @Post()
  async create(@Body() createBooksDto: CreateBooksDto) {
    return this.BooksService.create(createBooksDto);
  }

  @Get(':AuthorName')
  async getStudent(@Param('AuthorName') AuthorName: string) {
    return await this.BooksService.findBooksByAuthor(AuthorName);
  }
}