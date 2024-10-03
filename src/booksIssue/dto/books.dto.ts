import { IsString, IsNumber, IsDate } from 'class-validator';

export class createBooksIssueDto {

  @IsNumber()
  rollId: number;
  
  @IsString()
  title: string;

  @IsDate()
  issuedAt: Date;

  @IsDate()
  returnedAt: Date;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt?: Date; // Optional
}
