import { Create, CreateMany } from 'src/types/crud-files';
import UserDto from '../domain/user';

export default class UserCreateMany implements CreateMany<UserDto, string> {
  constructor(private create: Create<UserDto>) {}

  async run(data: UserDto[]): Promise<string[]> {
    const idsPromise = data.map(async (user) => {
      return (await this.create.run(user)).getId();
    });

    const ids: string[] = [];
    idsPromise.forEach(async (id_) => {
      const id = await id_;
      ids.push(id);
    });
    return ids;
  }
}
