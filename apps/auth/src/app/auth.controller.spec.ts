import { Test, TestingModule } from '@nestjs/testing';

import {AuthController  } from './auth.controller';
import { AuthService } from './auth.service';
import {} from "@trustee/prisma-client"

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to auth!"', () => {
      const appController = app.get<AuthController>(AuthController);
      expect(appController.getData()).toEqual({ message: 'Welcome to auth!' });
    });
  });
});
