import { Context } from "koa";

import { responses } from '../constant';

import session from '../utility/session';

export default async (ctx: Context, next: Function) => {
  const _token = (ctx.get('Authorization') as string).replace('Bearer ', '');

  if(!_token) {
    ctx.status = 403;
    return ctx.body = responses[ctx.status];
  }


  const payload: any = await session.verify(_token);

  if(!payload) {
    ctx.status = 403;
    return ctx.body = responses[ctx.status];
  }

  if(payload.user) {
    ctx.set('TOKEN', await session.set(payload.user));
  }

  await next();
}