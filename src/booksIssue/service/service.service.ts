import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookIssue } from '../../typeorm/entities/BookIssue.entity';
import { createBooksIssueDto } from '../dto/books.dto';
import { Student } from 'src/typeorm/entities/Student.entity';
import { Book } from 'src/typeorm/entities/Book.entity';

@Injectable()
export class BooksIssueService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
    @InjectRepository(BookIssue)
    private readonly bookIssueRepository: Repository<BookIssue>,
  ) { }

  async createBookIssue(rollId: number, title: string): Promise<BookIssue> {
    // Find the student and book entities
    const student = await this.studentRepository.findOne({ where: { id: rollId } });
    const book = await this.bookRepository.findOne({ where: { title: title } });
    // console.log("chec",student,book)
    // Check if the student or book is not found
    if (!student || !book) {
      throw new NotFoundException('Student or book not found');
    }

    // Check if the student already has an active book issue
    const existingIssue = await this.bookIssueRepository.findOne({
      where: { studentId: student.id, returnedAt: null },
    });
    console.log(existingIssue)
    if (existingIssue) {
      throw new BadRequestException('Student already has an active book issue');
    }

    // Create a new book issue
    const bookIssue = new BookIssue();
    bookIssue.student = student;
    bookIssue.book = book;
    return this.bookIssueRepository.save(bookIssue);
  }

  async bookReturned(rollId: number, title: string): Promise<{ message: string }> {
    // Find the student and book entities
    const student = await this.studentRepository.findOne({ where: { id: rollId } });
    const book = await this.bookRepository.findOne({ where: { title: title } });
    if (student && book) {
      // Check if the student already has an active book issue
      const existingIssue = await this.bookIssueRepository.findOne({
        where: { studentId: student.id, bookId: book.id },
      });
      console.log(existingIssue)
      if (existingIssue && !existingIssue?.returnedAt) {
        const result = await this.bookIssueRepository.update(
          { id: existingIssue.id },
          { returnedAt: new Date() }
        );
        let bookCount = student.noOfBooksIssued + 1;
        const result1 = await this.studentRepository.update(
          { id: student.id },
          { noOfBooksIssued: bookCount }
        );
        return { message: 'Book returned successfully' };
      } else {
        throw new BadRequestException('No book found');
      }
    }
    else {
      throw new BadRequestException('No book found');
    }
  }
}