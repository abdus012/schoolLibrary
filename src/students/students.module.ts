import { Module } from '@nestjs/common';
import { StudentController } from './controller/students/students.controller';
import { StudentService } from './service/service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/typeorm/entities/Student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [StudentController],
  providers: [StudentService]
})
export class StudentsModule {}
