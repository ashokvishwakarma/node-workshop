/**
 * config index
 * @author Ashok Vishwakarma <akvlko@gmail.com>
 * combine all the config 
 */
/**
 * jwt
 * 
 * config for jwt
 */
import jwt from './jwt';

/**
 * database
 * 
 * config for database
 */
import database from './database';

/**
 * log
 * 
 * config for logger
 */
import log from './log';

/**
 * app
 * 
 * config for application
 */
import app from './app';

export default {
  jwt,
  database,
  log,
  app
}