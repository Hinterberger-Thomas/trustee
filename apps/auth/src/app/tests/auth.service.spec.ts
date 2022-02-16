import { Test } from '@nestjs/testing';
import { AuthService } from '../auth.service';
import { PrismaService } from '../prisma.service';
import { userStub } from './stubs/user.stub';

describe('AuthService', () => {
  let service: AuthService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AuthService,PrismaService],
    }).compile();

    service = app.get<AuthService>(AuthService);
  });

  describe('login', () => {
    it('should return void', async () => {
      expect(await service.login(userStub())).toBeUndefined();
    });
  });
  describe('register', () => {
    it('should return void', async () => {
      expect(await service.register(userStub())).toBeUndefined();
    });
  });
  describe('resetPassword', () => {
    it('should return void', async () => {
      expect(await service.resetPassword(userStub())).toBeUndefined();
    });
  });
  describe('deleteUser', () => {
    it('should return void', async () => {
      expect(await service.deleteUser()).toBeUndefined();
    });
  });
});
