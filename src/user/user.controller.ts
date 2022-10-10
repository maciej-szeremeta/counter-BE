import { Body, Controller, Post, Get, UseGuards, UsePipes, ValidationPipe, Delete, Param, Patch, } from '@nestjs/common';
import { AuthGuard, } from '@nestjs/passport';
import { UserRoleEnum, } from '../interface/user-role';
import { Roles, } from '../decorators/roles.decorator';
import { RolesGuard, } from '../guards/roles.guard';
import { GetAllUsersRes, GetOneUsersRes, UserRegisterRes, } from '../interface/user';
import { RegisterAdminDto, } from './dto/register-admin.dto';
import { UserService, } from './user.service';
import { RegisterUserDto, } from './dto/register-user.dto';
import { User, } from './entities/user.entity';
import { UserObj, } from '../decorators/user-obj.decorator';

@Controller('/user')
export class UserController {

  constructor(private readonly userService: UserService) { }
   
  // !!! Delete After Created Admin Action!!!
    @Post('/register-admin')
  async createAdmin(
    @Body() createUser: RegisterAdminDto
  ): Promise<UserRegisterRes> {
    return this.userService.registerAdmin(createUser);
  }

  @Post('/register-user')
  @UsePipes(ValidationPipe)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRoleEnum.ADMIN)
    async createUser(
      @Body() createUser: RegisterUserDto,
      @UserObj() user: User
    ): Promise<UserRegisterRes> {
      return this.userService.registerUser(createUser, user);
    }

  @Get('/')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRoleEnum.ADMIN)
  async findAllUsers():Promise<GetAllUsersRes> {
    return this.userService.findAll();
  }
  
  @Get('/:id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRoleEnum.ADMIN)
  getOneProduct(@Param('id') id: string): Promise<GetOneUsersRes> {
    return this.userService.getOne(id);
  }

  @Patch('/:id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRoleEnum.ADMIN)
  async update(
  @Param('id') id: string,
  @Body() updateUserDto: UpdateUserDto,
  @UserObj() user: User) {
    return this.userService.update(id, updateUserDto, user);
  }

  @Delete('/:id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRoleEnum.ADMIN)
  async DeleteUser(
    @Param('id') id: string) { return this.userService.remove(id); }
}
