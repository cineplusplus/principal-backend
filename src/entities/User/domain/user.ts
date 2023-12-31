import { $Enums, User } from '@prisma/client';
import { Hash } from 'src/config/encrypting';

export default class UserDto {
  constructor(
    private user: User,
    private is: boolean = false,
  ) {}

  private async setPassword() {
    this.user.password = await Hash(this.user.password);
  }

  getId(): string {
    return this.user.id;
  }

  get(): User {
    return this.user;
  }

  getActive(): boolean {
    return this.user.active;
  }
  getRole(): $Enums.Role {
    return this.user.role;
  }

  private getCreateUser(): Omit<User, 'id'> {
    return {
      active: false,
      avatar: '',
      email: this.user.email,
      name: this.user.name,
      password: this.user.password,
      role: $Enums.Role.USER,
    };
  }

  private getCreateAdmin(): Omit<User, 'id'> {
    return {
      active: false,
      avatar: '',
      email: this.user.email,
      name: this.user.name,
      password: this.user.password,
      role: $Enums.Role.ADMIN,
    };
  }

  async getCreate(): Promise<Omit<User, 'id'>> {
    await this.setPassword();
    return this.is ? this.getCreateAdmin() : this.getCreateUser();
  }

  async getUpdate(hashPassword: boolean = false): Promise<Omit<User, 'id'>> {
    if (hashPassword) await this.setPassword();
    return {
      active: this.user.active,
      avatar: this.user.avatar,
      email: this.user.email,
      name: this.user.name,
      password: this.user.password,
      role: this.user.role,
    };
  }
}
export { User };
