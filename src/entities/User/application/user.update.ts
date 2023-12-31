import PrismaService from 'src/prisma/prisma.service';
import UserDto from '../domain/user';
import { Update } from 'src/types/crud-files';

export class UserUpdate implements Update<UserDto, string> {
  constructor(private prismaService: PrismaService) {}

  async run(id: string, data: Partial<UserDto>): Promise<UserDto> {
    const user = await this.prismaService.user.update({
      data,
      where: {
        id,
      },
    });
    return new UserDto(user);
  }
}
