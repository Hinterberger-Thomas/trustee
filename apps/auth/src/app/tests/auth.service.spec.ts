import { Test } from '@nestjs/testing';

import { AuthService } from '../auth.service';

describe('AppService', () => {
  let service: AuthService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = app.get<AuthService>(AuthService);
  });

  describe('getData', () => {
    it('should return "Welcome to auth!"', () => {
      expect(service.getData()).toEqual({ message: 'Welcome to auth!' });
    });
  });
  describe('getData', () => {
    it('should return "Welcome to auth!"', () => {
      const a = service.getData()
      a
      expect(service.getData()).toEqual({ message: 'Welcome to auth!' });
    });
  });
  describe('getData', () => {
    it('should return "Welcome to auth!"', () => {
      const a = service.getData()
      a
      expect(service.getData()).toEqual({ message: 'Welcome to auth!' });
    });
  });
  describe('getData', () => {
    it('should return "Welcome to auth!"', () => {
      const a = service.getData()
      a
      expect(service.getData()).toEqual({ message: 'Welcome to auth!' });
    });
  });
});
