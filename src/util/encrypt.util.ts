import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

export function encryptString(plain: string) {
  return bcrypt.hashSync(plain, saltOrRounds);
}

export function compareEncryptString(plain = '', hashString = '') {
  return bcrypt.compareSync(plain, hashString);
}
