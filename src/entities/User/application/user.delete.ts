import PrismaService from 'src/prisma/prisma.service';
import { Delete } from 'src/types/crud-files';

export class UserDelete implements Delete<string> {
  constructor(private prismaService: PrismaService) {}

  async run(id: string): Promise<any> {
    return await this.prismaService.user.delete({
      where: {
        id,
      },
    });
  }
}
