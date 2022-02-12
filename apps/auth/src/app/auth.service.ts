import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {PrismaErrorCodes} from "@trustee/prisma-client"

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  getData(): string  {
    return "his.prisma.user";
  }
}
