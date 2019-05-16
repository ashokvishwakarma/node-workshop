/**
 * route index
 * @author Ashok Vishwakarma <akvlko@gmail.com>
 * combine all the routes
 */

/**
 * combineRoutes
 * 
 * combine routes exported from files
 */
import { combineRoutes } from '../utility/helper';

/**
 * user
 * 
 * Routes for user
 */
import user from './user';

import auth from './auth';

export default combineRoutes([
  user,
  auth
]);