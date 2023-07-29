import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { rootUser } from 'src/config';
import { UserService } from 'src/user/user.service';
import { compareEncryptString } from 'src/util/encrypt.util';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signin(username: string, password: string): Promise<any> {
    if (username === rootUser.username && password === rootUser.password) {
      const payload = {
        sub: '00000000',
        username: 'super_root',
        role: 'SUPER_ROOT',
      };

      return { access_token: await this.jwtService.signAsync(payload) };
    }

    const user = await this.userService.findUser(username);
    if (!user && !compareEncryptString(password, user?.password))
      throw new UnauthorizedException();

    const payload = { sub: user.id, username: user.username, role: user.role };

    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
