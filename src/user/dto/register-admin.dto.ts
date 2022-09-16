import { IsNotEmpty, Length, IsString, IsEmail, Matches, } from 'class-validator';

export class RegisterAdminDto{
@IsNotEmpty({ message: 'Email nie może być pusty.', })
@IsString({ message: 'Email musi być typu tekst.', })
@IsEmail({ message: 'Pole nie jest Email-em.', })
  email: string;

@IsNotEmpty({ message:'Hasło nie może być puste.', })
@Length(6, 24, { message: 'Hasło powinno mieć od 6 do 24 znaków.', })
@IsString({ message: 'Hasło powinno być tekstem.', })
  @Matches(/^(?=.*?[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-])/, { message: 'Hasło powinno zawierać przynajmniej jedną dużą, jedną mała liter oraz znak specjalny', })
  pwd: string;
}