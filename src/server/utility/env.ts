/**
 * env
 * @author Ashok Vishwakarma <akvlko@gmail.com>
 * Utility to read .env file
 */

 /**
  * dotenv
  * 
  * A zero-dependency module
  * loads environment variables from .env file
  * 
  * Read more https://github.com/motdotla/dotenv#readme
  */
 import * as dotenv from 'dotenv';

 /**
  * fs
  * 
  * filesystem module from node
  */
 import { readFileSync} from 'fs';
 
 /**
  * join
  * 
  * join method from path module
  */
 import { join } from 'path';
 
 /**
  * __root
  * 
  * root of the module loader
  * using mainModules from process
  * tels the base module loading directory 
  * typeically the path of node_modules folder 
  */
 const __root = process.mainModule.paths[0].split('node_modules')[0].slice(0, -1);
 
 /**
  * _env
  * 
  * contents of .env file
  */
 const _env: any = dotenv.parse(readFileSync(join(__root, '../../.env')));
 
 /**
  * env
  * @param _key 
  * @param d 
  * 
  * Used to read the value on the given key
  * from .env file
  */
 const env: Function = (_key: string, d: any): string => {
   if(!_env[_key]) {
     return d;
   }
 
   return _env[_key];
 };
 
 export default env;