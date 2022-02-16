import { INestApplication, INestMicroservice } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../app.module';
import { LoginUserDto } from '../dto/user.dto';
import { userStub } from './stubs/user.stub';
describe('Auth (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
  describe('login (Post)', () => {
    it('should return empty body and 201 status', () => {
      return request(app.getHttpServer())
        .post('/login')
        .send(userStub())
        .expect(200)
        .expect('');
    });
  });
  describe('register (post)', () => {
    it('should return empty body and a 201 status', () => {
      return request(app.getHttpServer())
        .post('/register')
        .send(userStub())
        .expect(201)
        .expect('');
    });
  });
  afterAll(async () => {
    app.close;
  });
});
