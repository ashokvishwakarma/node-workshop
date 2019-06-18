/**
 * UserController
 * @author Ashok Vishwakarma <akvlko@gmail.com>
 * Business logic user
 */

 /**
  * Context
  * 
  * Koa context
  */
import { Context } from "koa";

/**
 * User
 * 
 * User model
 */
import User from '../model/User';

import { to, encrypt } from "../utility/helper";

class UserController {
  /**
   * all
   * 
   * @param {Context} ctx 
   * 
   * return all the users from database
   */
  async all(ctx: Context): Promise<any> {

    const {
      email
    } = ctx.request.query;

    const [error, users] = await to(User.find({
      email
    }).exec());

    if(error) {
      return ctx.body = {
        type: 'error',
        message: error.message
      }
    }

    ctx.body = {
      type: 'success',
      data: users
    }
  }

  async save(ctx: Context) {
    
    ctx.request.body['password'] = encrypt(ctx.request.body['password']);

    const [error, user] = await to(User.create(ctx.request.body));

    if(error) {
      return ctx.body = {
        type: 'error',
        message: error.message
      }
    }

    ctx.body = {
      type: 'success',
      date: user
    }
  }
}

export default new UserController();