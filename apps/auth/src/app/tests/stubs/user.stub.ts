import { Prisma, User } from '@prisma/client';

export const userStub = (): User => {
  return {
    id: 23,
    email: 'thomas.hinterberger@gmail.com',
    firstname: 'thomas',
    lastname: 'hinterberger',
    password: '123',
  };
};
