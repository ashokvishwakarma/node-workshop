/**
 * Router
 * 
 * Routing midlleware for Koa
 * 
 * Read more https://www.npmjs.com/package/koa-router
 */
import * as Router from 'koa-router';

/**
 * UserController
 * 
 * User related business logic
 */
import UserController from '../controller/UserController';

/**
 * user
 * 
 * Router instance for user
 * 
 * using prefix will start the each URLs
 * using the same prefix
 * .get('/') will resolve to /user/
 */
const user: Router = new Router({
  prefix: '/user'
});

user
  .get('/', UserController.all);

export default user;