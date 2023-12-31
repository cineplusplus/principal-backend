import { Body, Controller, Get, Post } from '@nestjs/common';
import UserService from '../application/user.service';
import UserDto, { User } from '../domain/user';

@Controller('users')
export default class UserController {
  constructor(private service: UserService) {}

  @Get()
  getUsers() {
    return 'Users';
  }

  @Post()
  async createUser(@Body() user: User) {
    return await this.service.create.run(
      new UserDto({
        ...user,
        id: '-1',
        avatar: '',
        active: false,
      }),
    );
  }

  @Post('/:id')
  async createUserAdmin() {
    return true;
  }
}
