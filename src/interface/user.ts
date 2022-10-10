
export interface UserEntity {
   id: string;
   email: string;
   currentTokenId: string | null;
   role: string,
   isActive: boolean;
   createdBy: string;
   createdAt: Date | number;
   updatedAt: Date | number;
}
export interface UserWithPwd extends UserEntity{
   pwdHash: string;
}

export type UserRegisterRes = Pick<UserEntity, 'id' | 'email'>;

export type GetAllUsersRes = UserEntity[];

export type GetOneUsersRes = { message: true; user:Pick<UserEntity, 'email'|'role'>; };

export interface DeletedUserRes {
   msg: boolean;
   user: string;
}