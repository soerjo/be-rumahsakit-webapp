import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignAuthDto } from './dto/sign-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() signAuthDto: SignAuthDto) {
    return this.authService.signin(signAuthDto.username, signAuthDto.password);
  }
}
