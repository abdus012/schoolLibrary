import { Test, TestingModule } from '@nestjs/testing';
import { BooksIssueService } from './service.service';

describe('StudentService', () => {
  let service: BooksIssueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksIssueService],
    }).compile();

    service = module.get<BooksIssueService>(BooksIssueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
