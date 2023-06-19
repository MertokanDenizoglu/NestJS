import { Controller, Post, Body, Get ,Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';


@Controller('user')
export class UserController {
  constructor(private userServices: UserService) {}
  @Post()
  createUser(@Body() body: UserCreateDto) {
    return this.userServices.createUser(body);
  }

  @Get()
  getAllUsers(): UserModel[] {
    return this.userServices.getAllUsers();
  }
  @Get(':id')
  getUser(@Param() params): UserModel | string {
    return this.userServices.getUserById(params.id);
  }
  
}
