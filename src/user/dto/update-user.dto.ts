import { IsNotEmpty, IsString, IsEmail, } from 'class-validator';

export class UpdateUserDto{
@IsNotEmpty({ message: 'Email nie może być pusty.', })
@IsString({ message: 'Email musi być typu tekst.', })
@IsEmail({ message: 'Pole nie jest Email-em.', })
  email: string;

@IsNotEmpty({ message: 'Rola nie może być pusta.', })
@IsString({ message: 'Rola musi być typu tekst.', })
  role: string;
}