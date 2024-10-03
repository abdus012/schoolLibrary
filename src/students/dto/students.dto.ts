import { IsString, IsNumber, IsDate } from 'class-validator';

export class CreateStudentDto {

  @IsString()
  name: string;

  @IsNumber()
  rollId: number;

  @IsString()
  grade: number;

  @IsNumber()
  fineAmount: number;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt?: Date; // Optional
}