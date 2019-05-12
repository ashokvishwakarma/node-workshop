import * as Router from 'koa-router';

import UserController from '../controller/UserController';

const user: Router = new Router({
  prefix: '/user'
});

user
  .get('/', UserController.all);

export default user;