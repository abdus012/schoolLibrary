import { Entity, Column, PrimaryGeneratedColumn, ManyToOne,CreateDateColumn,UpdateDateColumn } from 'typeorm';
import { Student } from './Student.entity';
import { Book } from './Book.entity';

@Entity()
export class BookIssue {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Student, (student) => student.currentBook)
  student: Student;

  @ManyToOne(() => Book, (book) => book.issues)
  book: Book;

  @Column({ nullable: false })
  studentId: number

  @Column({ nullable: false })
  bookId: number

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  issuedAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  returnedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}