import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany,CreateDateColumn,UpdateDateColumn, Index } from 'typeorm';
import { BookIssue } from './BookIssue.entity';


@Entity()
@Index('book_author_idx', ['authorName'])
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  authorName: string;

  @OneToMany(() => BookIssue, (bookIssue) => bookIssue.book)
  issues: BookIssue[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}