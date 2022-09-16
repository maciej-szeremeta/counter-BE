import { hash, compare, }from 'bcryptjs';

export const hashPwd = (pwd: string): Promise<string> => {
  return hash(pwd, 10);
};

export const comparePwd = (pwd: string, pwdHash:string): Promise<boolean> => {
  return compare(pwd, pwdHash);
};