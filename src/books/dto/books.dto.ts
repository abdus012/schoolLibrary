import { IsString, IsNumber, IsDate } from 'class-validator';

export class CreateBooksDto {

  @IsString()
  title: string;
  
  @IsString()
  authorName: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt?: Date; // Optional
}