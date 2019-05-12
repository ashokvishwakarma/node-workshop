import { Context } from "koa";

class UserController {
  async all(ctx: Context): Promise<any> {
    ctx.body = {
      name: 'Ashok'
    }
  }
}

export default new UserController();