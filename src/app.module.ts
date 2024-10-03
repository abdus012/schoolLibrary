import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsModule } from './students/students.module';
import { Student } from './typeorm/entities/Student.entity';
import { BookIssue } from './typeorm/entities/BookIssue.entity';
import { Book } from './typeorm/entities/Book.entity';
import { BooksModule } from './books/books.module';
import { BooksIssueModule } from './booksIssue/books.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Xpress@123',
      database: 'dataDump',
      entities: [Student,BookIssue,Book], // Path to your entity files
      synchronize: true, // Adjust this based on your development environment
    }),
    StudentsModule,
    BooksModule,
    BooksIssueModule
     // Adding different modules here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}