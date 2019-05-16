/**
 * helpers
 * @author Ashok Vishwakarma <akvlko@gmail.com>
 * Some helper utlity methods
 */

/**
 * UUIDV1
 * 
 * UUID V1
 * 
 * Read more https://github.com/kelektiv/node-uuid#readme
 */
import * as UUIDV1 from 'uuid/v1';

/**
 * createHmac, randomBytes
 *
 * method createHmac and randomBytes from crypto module
 */
import { createHmac, randomBytes } from 'crypto';

/**
 * existsSync
 * 
 * method existsSync from fs module
 * check synchronously if given path (file/folder) exists
 */
import { existsSync } from 'fs';

/**
 * compose
 * 
 * Utility to compose middleware
 * from an array or multile middleares
 * 
 * Read more https://github.com/koajs/compose#readme
 */
import * as compose from 'koa-compose';

/**
 * Router
 * 
 * Routing midlleware for Koa
 * 
 * Read more https://www.npmjs.com/package/koa-router
 */
import * as Router from 'koa-router';

/**
 * config
 * 
 * application global config
 */
import config from '../config';

/**
 * elapseTime
 * 
 * elapsed time from start
 * 
 * @param {*} start 
 */
export const elapseTime = (start: any) => {
  const delta = Date.now() - start;
  return delta < 10000 ? delta + 'ms' : Math.round(delta / 1000) + 's';
};

/**
 * to
 * 
 * error handler for await
 * 
 * @uses const [error, data] = await to(Promise)
 * @param {*} promise 
 */
export const to = async (promise: Promise<any>): Promise<Array<any>> => {
  return promise.then(data => [null, data]).catch(err => [err, null]);
}


/**
 * uuid
 * 
 * Generate UUIDV1 for IDs
 */
export const uuid = (): string => {
  return UUIDV1();
}

/**
 * encrypt
 * 
 * @param {*} password 
 * 
 * sha512 HAMC string encryption
 */
export const encrypt = (password: string) => {
  const hash = createHmac('sha512', 'SomeKey');
  hash.update(password);
  return hash.digest('hex');
};

/**
 * generateResetToken
 * 
 * Password reset token generation
 */
export const generateResetToken = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    randomBytes(64, (ex, buf) => {
      return resolve(buf.toString('hex'));
    });
  });
}

/**
 * validateJson
 * 
 * Utility method to validate jsonString
 * @param {any} jsonString 
 */
export const validateJson = (jsonString: any): boolean => {
  if(typeof jsonString !== 'string') {
    return false;
  }

  try {
    JSON.parse(jsonString);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * pathExists
 * 
 * Check if a path exists in file system
 * @param {*} path 
 */
export const pathExists = (path: string): boolean => {
  return existsSync(path);
}

/**
 * pluck
 * 
 * @param {*} data 
 * @param {*} key 
 */
export const pluck = (data: any, key: any): any => {
  const d: any = [];
  if(Array.isArray(data)) {
    data.forEach(da => {
      d.push(da[key]);
    })
  }else {
    d.push(data[key]);
  }

  return d;
}

/**
 * getValues
 * 
 * @param {*} obj
 * @param {String[]} keys
 */
export const getValues = (obj: any, keys: Array<string>): any => {
  const values: any = {};
  keys.forEach(key => {
    if(typeof obj[key] !== 'undefined') {
      values[key] = obj[key];
    }
  });

  return values;
}

/**
 * getRootPath
 * 
 * Get the server root path
 */
export const getRootPath = (): string => {
  return process.mainModule.paths[0].split('node_modules')[0].slice(0, -1);
}

/**
 * validateEmail
 * 
 * @param {string} email 
 */
export const validateEmail = (email: string): boolean => {
  const _email_reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return _email_reg.test(email);
}

/**
 * combineRoutes
 * 
 * combine all the routers using compose
 */

export const combineRoutes = (routers: Array<Router>): compose.ComposedMiddleware<any> => {
  const _middleware: Array<any> = [];

  routers.forEach(router => {
    _middleware.push(router.routes());
    _middleware.push(router.allowedMethods());
  });

  return compose(_middleware);
}