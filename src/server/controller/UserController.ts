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

import { to } from "../utility/helper";

class UserController {
  /**
   * all
   * 
   * @param {Context} ctx 
   * 
   * return all the users from database
   */
  async all(ctx: Context): Promise<any> {
    const [error, users] = await to(User.find({}).exec());

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
}

export default new UserController();