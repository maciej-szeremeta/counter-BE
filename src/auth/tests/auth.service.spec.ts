import { getRepositoryToken, } from '@nestjs/typeorm';
import { Test, TestingModule, } from '@nestjs/testing';
import { AuthService, } from '../auth.service';
import { User, } from '../../user/entities/user.entity';

describe('AuthService', () => {
  let service: AuthService;

  const mockAuthReposiotory = {
    
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ AuthService, {
        provide: getRepositoryToken(User),
        useValue: mockAuthReposiotory,
      },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
