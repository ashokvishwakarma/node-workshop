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

    if(!_user || error) {
      ctx.body = {
        type: 'error',
        message: message.INVALID_LOGIN
      }
    }

    const [_error, _token] = await to(session.set({
      id: _user._id,
      name: _user.name,
      email: _user.email,
      created_at: _user.created_at
    }));

    if(_error) {
      return  ctx.body = {
        type: 'error',
        message: 'Something went worng!'
      }
    }

    ctx.set('TOKEN', _token);
    ctx.body = {
      type: 'success',
      message: 'Login successful.'
    }

  }

  async register(ctx: Context) {
    ctx.request['body'].password = encrypt(ctx.request['body'].password);

    const [error, _user] = await to(User.create(ctx.request['body']));

    if(error) {
      return ctx.body = {
        type: 'error',
        message: error.message
      }
    }

    ctx.body = {
      type: 'success',
      message: 'User created successfully.',
      data: _user
    }
  }
}

export default new AuthController();