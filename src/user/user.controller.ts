import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto, UserUpdateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';

@Controller('user')
export class UserController {
  constructor(private userServices: UserService) {}
  @Post()
  async createUser(@Body() body: UserCreateDto): Promise<UserModel> {
    return await this.userServices.create(body);
  }

  @Get()
  async getAllUsers(): Promise<UserModel[]> {
    return await this.userServices.findAll();
  }
  @Get(':id')
  async getUser(@Param() params): Promise<UserModel> {
    return await this.userServices.findOne(params.id);
  }
  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() UserUpdateDto: UserUpdateDto,
  ): Promise<UserModel> {
    return await this.userServices.update(id, UserUpdateDto);
  }
  @Delete(':id')
  async removeUser(@Param('id') id: string): Promise<UserModel> {
    return await this.userServices.delete(id);
  }
}
