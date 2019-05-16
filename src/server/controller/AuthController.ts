import { Context } from 'koa';

import User from '../model/User';
import session from '../utility/session';
import { encrypt, to } from '../utility/helper';
import { message } from '../constant';

class AuthController {
  async login(ctx: Context) {
    const { email, password} = ctx.request.body;

    const [error, _user] = await to(User.findOne({
      email,
      password: encrypt(password)
    }).exec());

    if(!_user) {
      ctx.body = {
        type: 'error',
        message: message.INVALID_LOGIN
      }
    }
    
  }

  async register(ctx: Context) {
    console.log(ctx.request);
  }
}

export default new AuthController();