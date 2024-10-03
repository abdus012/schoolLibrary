
import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { BooksIssueService } from '../../service/service.service';
import { createBooksIssueDto } from '../../dto/books.dto';

@Controller('booksIssued')
export class BooksIssueController {
  constructor(private readonly BooksIssueService: BooksIssueService) {}

  @Post()
  async createBookIssue(@Body() createBooksIssueDto: createBooksIssueDto ) {
    const { rollId, title } = createBooksIssueDto;
    return this.BooksIssueService.createBookIssue(rollId, title);
  }

  @Post('returnRequest')
  async bookReturned(@Body() createBooksIssueDto: createBooksIssueDto ) {
    const { rollId, title } = createBooksIssueDto;
    return this.BooksIssueService.bookReturned(rollId, title);
  }
}