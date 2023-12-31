import PrismaService from 'src/prisma/prisma.service';
import UserDto from '../domain/user';
import { ReadAll } from 'src/types/crud-files';

export class UserReadAll implements ReadAll<UserDto> {
  constructor(private prismaService: PrismaService) {}

  async run(): Promise<UserDto[]> {
    const users = await this.prismaService.user.findMany();
    return users.map((user) => {
      return new UserDto(user);
    });
  }
}
