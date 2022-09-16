import { IsEmail, IsNotEmpty, IsString, } from 'class-validator';

export class ResetPasswordDto {
   @IsNotEmpty({ message: 'Email nie może być pusty.', })
   @IsString({ message: 'Email powinien być tekstem.', })
   @IsEmail({ message: 'Pole nie jest mailem', })
     email: string;
}