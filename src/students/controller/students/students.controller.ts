
import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { StudentService } from '../../service/service.service';
import { CreateStudentDto } from '../../dto/students.dto';

@Controller('students')
export class StudentController {
  constructor(private readonly StudentService: StudentService) {}

  @Get()
  async getStudents() {
    return await this.StudentService.findStudents();
  }

  @Post()
  async create(@Body() createStudentDto: CreateStudentDto) {
    return this.StudentService.create(createStudentDto);
  }

  @Get(':id')
  async getStudent(@Param('id') id: number) {
    return await this.StudentService.findStudentById(id);
  }
}