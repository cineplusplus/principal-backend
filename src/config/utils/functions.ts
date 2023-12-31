import { UserReadById } from 'src/entities/User/application/user.readById';
import UserDto from 'src/entities/User/domain/user';
import PrismaService from 'src/prisma/prisma.service';

export async function VerifyIDUser(
  id: string,
): Promise<{ is: boolean; user: UserDto | null }> {
  const user = await new UserReadById(new PrismaService()).run(id);
  const isActive = user !== null && user.getActive();
  return {
    is: isActive ? user !== null && user !== undefined : false,
    user,
  };
}
