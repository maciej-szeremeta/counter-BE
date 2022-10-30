import { hashPwd, } from './../utils/hash-pwd';
import { Injectable, ConflictException, NotFoundException, } from '@nestjs/common';
import { RegisterAdminDto, } from './dto/register-admin.dto';
import { User, } from './entities/user.entity';
import { UserRoleEnum, } from '../interface/user-role';
import { GetAllUsersRes, GetOneUserRes, UserEntity, UserRegisterRes, } from '../interface/user';
import { RegisterUserDto, } from './dto/register-user.dto';
import { v4 as uuid, } from 'uuid';
import { UpdateUserDto, } from './dto/update-user.dto';

@Injectable()
export class UserService {

  // constructor(

  // @Inject(forwardRef(() => 
  //   MailService)
  // )
  // private mailService: MailService

  // @Inject(forwardRef(() => 
  //   HrService)
  // )
  // private hrService: HrService,
  // @Inject(forwardRef(() => 
  //   StudentService)
  // )
  // private studentService: StudentService
  // ) {}

  async registerAdmin(newUser: RegisterAdminDto): Promise<UserRegisterRes> {

    const registerUser = new User();
    registerUser.email = newUser.email;
    registerUser.pwdHash = await hashPwd(newUser.pwd);
    registerUser.isActive=true;
    await registerUser.save();
    registerUser.createdBy = registerUser.id;
    registerUser.role = UserRoleEnum.ADMIN;
    await registerUser.save();

    return this.filterAdmin(registerUser);
  };

  filterAdmin(user: User): UserRegisterRes {
    const { id, email, } = user;
    return {
      id,
      email,
    };
  };

  async registerUser(newUser: RegisterUserDto, userRole: User): Promise<UserRegisterRes> {

    const user = await User.findOneBy({ email: newUser.email, });
    
    if (user) {
      throw new ConflictException([ 'Taki użytkownik istnieje już w bazie.', ]);
    }
    const registerUser = new User();

    registerUser.email = newUser.email;
    registerUser.pwdHash = await hashPwd(newUser.pwd);
    registerUser.isActive= true;
    await registerUser.save();
    registerUser.createdBy = userRole.id;
    registerUser.role = UserRoleEnum.USER;
    await registerUser.save();
    return this.filterUser(registerUser);
  };

  filterUser(user: UserEntity):UserRegisterRes{
    const { id, email, } = user;
    return { id, email, };
  };

  async findAll(): Promise<GetAllUsersRes> {

    return (await User.find()).map (user => {
      const { pwdHash, ...restData } = user;
      return restData;
    });
  }

  async getOne(id: string): Promise<GetOneUserRes> {
    const user = await User.findOneBy({ id, });
    if (!user) {
      throw new NotFoundException(`User ${id} nie istnieje`);
    }
    const oneUser = await User.findOneByOrFail({
      id,
    });
    return { message: true, user: { id:oneUser.id, email: oneUser.email, role:oneUser.role, }, };
  }

  async remove(id: string) {
    const deletedUser = await User.findOneBy({ id, });
    if (!deletedUser) {
      throw new NotFoundException(`User ${id} nie istnieje`);
    }
    await User.delete(id);
    return { message:true, user:deletedUser.email, };
  }

  async update(id:string, user: UpdateUserDto, userRole: User): Promise<UserRegisterRes> {

    const updateUser = await User.findOneBy({ id, });
    
    if (!updateUser) {
      throw new NotFoundException([ `User ${id} nie istnieje`, ]);
    }

    const foundUser = await User.findOneBy({ email: user.email, });

    if (foundUser && foundUser.id !== id) {
      throw new ConflictException([ 'Taki użytkownik istnieje już w bazie.', ]);
    }
    const { email, role, } = user;

    updateUser.email = email || updateUser.email;
    updateUser.role = role || updateUser.role;
    updateUser.createdBy = userRole.id;
    await updateUser.save();
    return updateUser;
  };
}
