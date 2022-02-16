import {
  Body,
  ConflictException,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
  Res,
  Version,
} from '@nestjs/common';
import { userInfo } from 'os';

import { AuthService } from './auth.service';
import {
  LoginUserDto,
  RegisterUserDto,
  ResetPasswordUserDto,
} from './dto/user.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Version('1')
  @HttpCode(201)
  @Post('register')
  async register(@Body() registerUser: RegisterUserDto): Promise<void> {
    return this.authService.register(registerUser);
  }

  @Version('1')
  @HttpCode(200)
  @Post('login')
  async login(@Body() loginUser: LoginUserDto): Promise<void> {
    throw new ConflictException();
  }

  @Version('1')
  @HttpCode(200)
  @Post('resetPassword')
  async resetPassword(
    @Body() resetPasswordUser: ResetPasswordUserDto
  ): Promise<void> {
    return this.authService.resetPassword(resetPasswordUser);
  }
  @Version('1')
  @HttpCode(200)
  @Post('deleteUser')
  async deleteUser(): Promise<void> {
    return this.authService.deleteUser();
  }

  @HttpCode(200)
  @Get()
  async hello(): Promise<string> {
    return 'hello';
  }
}
