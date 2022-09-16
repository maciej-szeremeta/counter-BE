import { Body, Controller, Post, UseGuards, UsePipes, ValidationPipe, } from '@nestjs/common';
import { AuthGuard, } from '@nestjs/passport';
import { UserRoleEnum, } from '../interface/user-role';
import { Roles, } from '../decorators/roles.decorator';
import { RolesGuard, } from '../guards/roles.guard';
import { UserRegisterRes, } from '../interface/user';
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
    async createHr(
      @Body() createUser: RegisterUserDto,
      @UserObj() user: User
    ): Promise<UserRegisterRes> {
      return this.userService.registerUser(createUser, user);
    }

}
