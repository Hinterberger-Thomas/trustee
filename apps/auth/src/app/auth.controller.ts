import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { userInfo } from 'os';

import { AuthService } from './auth.service';
import { LoginUserDto, RegisterUserDto, ResetPasswordUserDto } from './dto/user.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async register(@Body() registerUser: RegisterUserDto): Promise<void> {
    return this.authService.register(registerUser);
  }

  @Post()
  async login(@Body() loginUser: LoginUserDto): Promise<void> {
    return this.authService.login(loginUser);
  }

  @Post()
  async resetPassword(@Body() resetPasswordUser: ResetPasswordUserDto): Promise<void> {
    return this.authService.resetPassword(resetPasswordUser);
  }

  @Post()
  async deleteUser(): Promise<void> {
    return this.authService.deleteUser();
  }
}
