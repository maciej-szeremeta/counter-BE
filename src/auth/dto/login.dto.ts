import { IsNotEmpty, } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty({ message: 'Email nie może być pusty.', } )
    email: string;

@IsNotEmpty({ message:'Hasło nie może być puste.', })
  pwd: string;
}