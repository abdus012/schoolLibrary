import { Body, Controller, Post } from '@nestjs/common';
import { BooksService } from '../../service/service.service';
import { CreateBooksDto } from '../../dto/books.dto';

@Controller('student')
export class studentController {
  constructor(private readonly StudentService: BooksService) {}

  @Post()
  async create(@Body() createstudentDto: CreateBooksDto) {
    return this.StudentService.create(createstudentDto);
  }
}