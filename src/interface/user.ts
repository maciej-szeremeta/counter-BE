
export interface UserEntity {
   id: string;
   email: string;
   pwdHash: string;
   currentTokenId: string | null;
   isActive: boolean;
   createdBy: string;
   createdAt: Date | number;
   updatedAt: Date | number;
}

export type UserRegisterRes = Pick<UserEntity, 'id'|'email'>