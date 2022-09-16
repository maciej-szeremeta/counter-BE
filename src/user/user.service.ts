import { Injectable, ConflictException, } from '@nestjs/common';
import { hashPwd, } from '../utils/hash-pwd';
import { RegisterAdminDto, } from './dto/register-admin.dto';
import { User, } from './entities/user.entity';
import { UserRoleEnum, } from '../interface/user-role';
import { UserEntity, UserRegisterRes, } from '../interface/user';
import { RegisterUserDto, } from './dto/register-user.dto';
import { v4 as uuid, } from 'uuid';

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
      throw new ConflictException('Taki użytkownik istnieje już w bazie.');
    }

    // const user_role = await UserRole.findOneByOrFail({ type: UserRoleEnum.HR, });

    // if(!user_role){
    //   throw new NotFoundException('Nie odnaleziona Encji');
    // }
    
    const registerUser = new User();

    registerUser.email = newUser.email;
    registerUser.createdBy = userRole.id;
    registerUser.pwdHash = await hashPwd(newUser.pwd);
    registerUser.isActive= true;
    await registerUser.save();
    registerUser.createdBy = registerUser.id;
    registerUser.role = UserRoleEnum.USER;
    await registerUser.save();

    // try {
    //   await this.mailService.confirmMail(
    //     newUser.email, `Witaj ${registerHr.fullName} w aplikacji HH 17! Potwierdz Email`, './confirm', {
    //       role: registerHr.fullName,
    //       userId: registerUser.id,
    //       tokenId: registerUser.currentTokenId,
    //     });
    // }
    // catch (error) {
    //   console.error(error);
    // }

    return this.filterUser(registerUser);
  };

  filterUser(user: UserEntity):UserRegisterRes{
    const { id, email, }=user;
    return { id, email, };
  };

  // async importStudent( userRole: User, files: MulterDiskUploadFiles):Promise<StudentImportRes> {
  //   const csvFile = files?.csv?.[ 0 ] ?? null;
  //   try {
  //     const StudentRes = [];

  //     // Wykonanie kodu z pol textowych
  //     if (csvFile) {
  //       const jsonData = await csv({
  //         flatKeys: false,
  //         checkType: true,
  //         delimiter: ';',
  //         ignoreEmpty: true,
  //       }).fromFile(csvFile.path);
  //       console.log(jsonData);
  //       const conflictEmails = [];
  //       for await (const { email, } of jsonData) { 
  //         const user = await User.findOneBy({ email, });
  //         if (user) {
  //           conflictEmails.push(email);
  //         }
  //       }
  //       if (conflictEmails.length > 0) {
  //         throw new ConflictException(config.messageErr.regiserConflictMail[ config.languages ](conflictEmails));
  //       }
  //       const user_role = await UserRole.findOneByOrFail({ type: UserRoleEnum.STUDENT, });

  //       if(!user_role){
  //         throw new NotFoundException('Nie odnaleziona Encji');
  //       }
  //       for await (const newUser of jsonData) {
  //         const registerUser = new User();

  //         registerUser.email = newUser.email;
  //         registerUser.createdBy = userRole.id;
  //         await registerUser.save();
    
  //         registerUser.pwdHash = uuid();
  //         registerUser.createdBy = userRole.id;
  //         registerUser.role = user_role;
  //         const newUsers = await registerUser.save();

  //         const student:CreateStudentDto = { ...newUser, user: newUsers.id, };
  //         const registerStudent = await this.studentService.addStudent(student, userRole);
  //         StudentRes.push(registerStudent);
  //         try {
  //           await this.mailService.confirmMail(
  //             newUser.email, 'Witaj Kursancie w aplikacji HH 17! Potwierdz Email', './confirm', {
  //               role: 'Kursancie',
  //               userId: registerUser.id,
  //               tokenId: registerUser.currentTokenId,
  //             });
  //         }
  //         catch (error) {
  //           console.error(error);
  //         }
  //       }
  //     }
  //     return this.filterStudent(StudentRes);
  //   }
  //   catch (err) {
  //     try {

  //       // Usówanie pliku gdy pójdzie cos nie tak
  //       if (csvFile) {       
  //         unlink(join(storageDir(), 'csv', csvFile.filename), err => { console.error(err); });
  //       }
  //     }
  //     catch (err2) {
  //       throw err2;
  //     }
  //     throw err;
  //   }

  // };

  // filterStudent(student){
  //   const studentArr =student.map(student => {
  //     const { user, courseCompletion, courseEngagement, projectDegree, teamProjectDegree, bonusProjectUrls, } = student;
  //     const url:string[] = bonusProjectUrls.map((bonusProjectUrl: { url: string; }):string => 
  //       bonusProjectUrl.url);
  //     return { id: user.id, email: user.email, courseCompletion, courseEngagement, projectDegree, teamProjectDegree, bonusProjectUrls:url, };
  //   });
  //   return studentArr;
  // };

}
