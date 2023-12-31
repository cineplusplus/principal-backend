import PrismaService from 'src/prisma/prisma.service';
import UserDto from '../domain/user';
import { ReadByEmail } from 'src/types/crud-files';

export class UserReadByEmail implements ReadByEmail<UserDto, string> {
  constructor(private prismaService: PrismaService) {}

  async run(email: string): Promise<UserDto> {
    const user = await this.prismaService.user.findFirst({
      where: {
        email,
      },
    });
    return new UserDto(user);
  }
}
