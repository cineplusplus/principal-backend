import PrismaService from 'src/prisma/prisma.service';
import UserDto from '../domain/user';
import { ReadById } from 'src/types/crud-files';

export class UserReadById implements ReadById<UserDto, string> {
  constructor(private prismaService: PrismaService) {}
  async run(id: string): Promise<UserDto> {
    const user = await this.prismaService.user.findFirst({
      where: {
        id,
      },
    });
    return new UserDto(user);
  }
}
