import { Injectable } from '@nestjs/common';
import PrismaService from 'src/prisma/prisma.service';
import { UserCreate } from './user.create';
import UserCreateMany from './user.createMany';
import { UserDelete } from './user.delete';
import { UserDeleteMany } from './user.deleteMany';
import { UserReadAll } from './user.read';
import { UserReadById } from './user.readById';
import { UserReadByEmail } from './user.readByEmail';
import { UserUpdate } from './user.update';
import Service from 'src/types/service';
import UserDto from '../domain/user';

@Injectable()
export default class UserService implements Required<Service<UserDto, string>> {
  create: UserCreate;
  createMany: UserCreateMany;
  delte: UserDelete;
  deleteMany: UserDeleteMany;
  readAll: UserReadAll;
  readById: UserReadById;
  readByEmail: UserReadByEmail;
  update: UserUpdate;
  constructor(protected prismaService: PrismaService) {
    this.create = new UserCreate(this.prismaService);
    this.createMany = new UserCreateMany(this.create);
    this.delte = new UserDelete(this.prismaService);
    this.deleteMany = new UserDeleteMany(this.prismaService);
    this.readAll = new UserReadAll(this.prismaService);
    this.readById = new UserReadById(this.prismaService);
    this.readByEmail = new UserReadByEmail(this.prismaService);
    this.update = new UserUpdate(this.prismaService);
  }
}
