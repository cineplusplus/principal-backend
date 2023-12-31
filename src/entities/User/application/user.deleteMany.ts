import PrismaService from 'src/prisma/prisma.service';
import { DeleteMany, DeleteManyFilter } from 'src/types/crud-files';
import { User } from '../domain/user';

export class UserDeleteMany implements DeleteMany {
  constructor(private prismaService: PrismaService) {}

  async run(filter: DeleteManyFilter<User>): Promise<any> {
    return await this.prismaService.user.deleteMany({
      where: filter.where,
    });
  }
}
