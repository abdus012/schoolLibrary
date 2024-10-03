import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from '../../typeorm/entities/Student.entity';
import { CreateStudentDto } from '../dto/students.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly StudentRepository: Repository<Student>,
  ) {}

  findStudents() {
    return this.StudentRepository.find()
  }

  async findStudentById(id: number): Promise<Student | null> {
    return this.StudentRepository.findOne({ where: { id } });
  }

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const createdStudent = this.StudentRepository.create(createStudentDto);
    return this.StudentRepository.save(createdStudent);
  }
}