import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaErrorCodes } from '@trustee/prisma-client';
import {
  LoginUserDto,
  RegisterUserDto,
  ResetPasswordUserDto,
} from './dto/user.dto';
import * as argon2 from 'argon2';
import { randomBytes } from 'crypto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(user: RegisterUserDto): Promise<void> {
    user.password =  await argon2.hash(user.password, { salt: randomBytes(16) });
    const errorCode = await this.prisma.user
      .create({ data: user })
      .then((_) => undefined)
      .catch((e) => e.code);

    if (errorCode === undefined) return;
    if (errorCode === PrismaErrorCodes.UniqueConstraintViolation)
      throw new ConflictException();
  }

  async login(loginUser: LoginUserDto): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: { email: loginUser.email },
      select: { password: true },
    });
    if (user.password === undefined) throw new UnauthorizedException();
    if (argon2.verify(loginUser.password, user.password)) return;
    throw new ConflictException();
  }

  async resetPassword(resetPasswordUser: ResetPasswordUserDto): Promise<void> {
    return;
  }

  async deleteUser(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
