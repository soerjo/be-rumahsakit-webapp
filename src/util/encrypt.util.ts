import * as bcrypt from 'bcrypt';

export function encryptString(plain: string) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(plain, salt);
}

export function compareEncryptString(plain = '', hashString = '') {
  return bcrypt.compareSync(plain, hashString);
}
