import { Controller, Request, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { plainToInstance } from 'class-transformer';

@Controller({
  version: '1',
})
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto): Promise<UserResponseDto> {
    const user = await this.userService.create(createUserDto);
    return plainToInstance(UserResponseDto, user.get({ plain: true }));
  }

  @UseGuards(JwtAuthGuard)
  @Get('user')
  async getUser(@Request() req): Promise<UserResponseDto> {
    return plainToInstance(UserResponseDto, req.user);
  }
}
