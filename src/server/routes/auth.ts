/**
 * Router
 * 
 * Routing midlleware for Koa
 * 
 * Read more https://www.npmjs.com/package/koa-router
 */
import * as Router from 'koa-router';
import AuthController from '../controller/AuthController';

const auth: Router = new Router({
  prefix: '/auth'
});

auth
  .post('/login', AuthController.login)
  .post('/register', AuthController.register)

export default auth;