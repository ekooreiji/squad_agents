import { Controller, Get, Post, Patch, Delete, Body, Param, Query, HttpCode, HttpStatus } from '@nestjs/common';

interface User {
  id: number;
  name: string;
  email: string;
}

@Controller('users')
export class UsersController {
  private users: User[] = [];
  private nextId = 1;

  @Get()
  findAll(@Query('page') page = '1', @Query('limit') limit = '20') {
    return {
      data: this.users,
      pagination: { page: Number(page), limit: Number(limit), total: this.users.length }
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const user = this.users.find(u => u.id === Number(id));
    if (!user) return { error: 'User not found' };
    return { data: user };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createDto: { name: string; email: string }) {
    const newUser = { id: this.nextId++, ...createDto };
    this.users.push(newUser);
    return { data: newUser };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: { name?: string; email?: string }) {
    const user = this.users.find(u => u.id === Number(id));
    if (!user) return { error: 'User not found' };
    Object.assign(user, updateDto);
    return { data: user };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    this.users = this.users.filter(u => u.id !== Number(id));
  }
}