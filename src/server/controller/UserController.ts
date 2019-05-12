/**
 * UserController
 * 
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

class UserController {
  /**
   * all
   * 
   * @param {Context} ctx 
   * 
   * return all the users from database
   */
  async all(ctx: Context): Promise<any> {
    // const users = await User.find({}).exec();
    // ctx.body = users;

    ctx.body = [{
      name: 'Ashok'
    }];
  }
}

export default new UserController();