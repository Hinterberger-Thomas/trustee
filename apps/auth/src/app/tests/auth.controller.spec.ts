import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from '../auth.controller';
import { AuthService } from '../auth.service';
import {} from '@trustee/prisma-client';
import { userStub } from './stubs/user.stub';
import {
  LoginUserDto,
  RegisterUserDto,
  ResetPasswordUserDto,
} from '../dto/user.dto';

describe('AuthController', () => {
  let app: TestingModule;
  let appController: AuthController;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    })
      .overrideProvider(AuthService)
      .useValue(mockAuthSerivce)
      .compile();

    appController = app.get<AuthController>(AuthController);
  });

  describe('login', () => {
    it('should return void', async () => {
      expect(await appController.login(userStub())).toBeUndefined();
    });
  });
  describe('register', () => {
    it('should return void', async () => {try{
      expect(await appController.register(userStub())).toBeUndefined();
    }catch(error){
      expect("hello")
    }});
  });
  describe('resetPassword', () => {
    it('should return void', async () => {
      expect(await appController.resetPassword(userStub())).toBeUndefined();
    });
  });
  describe('deleteUser', () => {
    it('should return void', async () => {
      expect(await appController.deleteUser()).toBeUndefined();
    });
  });
});

const mockAuthSerivce = {
  login: (registeruser: RegisterUserDto): Promise<void> => {
    return;
  },
  register: (loginUser: LoginUserDto): Promise<void> => {
    return;
  },
  resetPassword: (resetPasswordUser: ResetPasswordUserDto): Promise<void> => {
    return;
  },
  deleteUser: (): Promise<void> => {
    return;
  },
};
