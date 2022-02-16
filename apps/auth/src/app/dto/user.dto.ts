import { Prisma } from '@prisma/client';
import { IsEmail, IsString, Length } from 'class-validator';

export class RegisterUserDto implements Prisma.UserCreateInput {
  @IsString()
  firstname: string;
  @IsString()
  lastname: string;
  @IsEmail()
  email: string;
  @IsString()
  @Length(8, 64)
  password: string;
}

export class LoginUserDto {
  @IsString()
  email: string;
  @IsString()
  password: string;
}

export class ResetPasswordUserDto {
  @IsString()
  password: string;
}
