import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { compareEncryptString } from 'src/util/encrypt.util';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signin(username: string, password: string): Promise<any> {
    if (
      username === process.env.ROOT_USERNAME &&
      password === process.env.ROOT_PASSWORD
    ) {
      const payload = {
        sub: '00000000',
        username: 'super_root',
        role: 'SUPER_ROOT',
      };

      return {
        access_token: await this.jwtService.signAsync(payload),
        payload,
      };
    }

    const user = await this.userService.findUser(username);
    const isPasswordTrue = compareEncryptString(password, user?.password);

    if (!user || !isPasswordTrue) throw new UnauthorizedException();

    console.log({ user });
    const payload = { sub: user.id, username: user.username, role: user.role };

    return { access_token: await this.jwtService.signAsync(payload), payload };
  }
}
