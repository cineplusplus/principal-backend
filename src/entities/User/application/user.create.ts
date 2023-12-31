import PrismaService from 'src/prisma/prisma.service';
import UserDto from '../domain/user';
import { Create } from 'src/types/crud-files';

export class UserCreate implements Create<UserDto> {
  constructor(private prismaService: PrismaService) {}

  async run(data: UserDto): Promise<UserDto> {
    const userG = await data.getCreate();
    const userCreate = await this.prismaService.user.create({
      data: userG,
    });
    return new UserDto(userCreate);
  }
}
