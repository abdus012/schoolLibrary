import { Body, Controller, Post } from '@nestjs/common';
import { StudentService } from '../../service/service.service';
import { CreateStudentDto } from '../../dto/students.dto';

@Controller('student')
export class studentController {
  constructor(private readonly StudentService: StudentService) {}

  @Post()
  async create(@Body() createstudentDto: CreateStudentDto) {
    return this.StudentService.create(createstudentDto);
  }
}