import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsEmail, IsString, Length } from 'class-validator';

export class RegisterUserDto implements Prisma.UserCreateInput {
  @IsString()
  @ApiProperty()
  firstname: string;
  @IsString()
  @ApiProperty()
  lastname: string;
  @IsEmail()
  @ApiProperty()
  email: string;
  @ApiProperty()
  @IsString()
  @Length(8, 64)
  password: string;
}

export class LoginUserDto {
  @IsString()
  @ApiProperty()
  email: string;
  @ApiProperty()
  @IsString()
  password: string;
}

export class ResetPasswordUserDto {
  @IsString()
  @ApiProperty()
  password: string;
}
