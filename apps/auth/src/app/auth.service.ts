import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaErrorCodes } from '@trustee/prisma-client';
import { Prisma } from '@prisma/client';
import { LoginUserDto, ResetPasswordUserDto } from './dto/user.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(user: Prisma.UserCreateInput): Promise<void> {
    if (
      this.prisma.user
        .create({ data: user })
        .catch((e) => e.code === PrismaErrorCodes.UniqueConstraintViolation)
        .then((_) => false)
    )
      return;
    throw new ConflictException();
  }

  async login(loginUser: LoginUserDto): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: { email: loginUser.email },
      select: { password: true },
    });
    if (loginUser.password === user.password) return;
    throw new UnauthorizedException();
  }

  async resetPassword(resetPasswordUser: ResetPasswordUserDto): Promise<void> {
    return;
  }

  async deleteUser(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
