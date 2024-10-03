import { Entity, Column, PrimaryGeneratedColumn, OneToOne,CreateDateColumn,UpdateDateColumn,Index,Unique } from 'typeorm';
import { BookIssue } from './BookIssue.entity';

@Entity()
@Unique(["grade", "rollId"]) // Create a unique composite index on grade and rollNo
export class Student {
 @Index('roll_idx', ['student.rollId'])
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  rollId: number;
 
  @Column({ nullable: false })
  grade: number;

  @Column({ nullable: true })
  noOfBooksIssued: number;

  @Column({ type: 'decimal', default: 0 })
  fineAmount: number;

  @OneToOne(() => BookIssue, (bookIssue) => bookIssue.student, {
    onDelete: 'SET NULL',
  })
  currentBook: BookIssue | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}