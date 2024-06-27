// src/users/users.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get('check-username')
  async checkUsernameExists(@Query('username') username: string) {
    const exists = await this.usersService.checkUsernameExists(username);
    return { exists };
  }

  @Get('check-email')
  async checkEmailExists(@Query('email') email: string) {
    const exists = await this.usersService.checkEmailExists(email);
    return { exists };
  }
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(@Query('adminUuid') adminUuid: string): Promise<User[]> {
    if (adminUuid) {
      return this.usersService.findByAdminUuid(adminUuid);
    }
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.usersService.findOneById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
