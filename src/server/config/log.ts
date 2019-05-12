/**
 * log
 * 
 * log config
 */

/**
 * env
 * 
 * env utility
 */
import env from '../utility/env';

/**
 * IndexSignature
 * 
 * Type interface for IndexSignature
 */
import { IndexSignature } from '../../types';


const log: IndexSignature = {
  PATH: env('LOG_PATH', ''),
  LEVEL: env('LOG_LEVEL', 'DEBUG'),
  FILE_NAME_FORMAT: env('LOG_FILE_NAME_FORMAT', 'YYY-MM-DD')
};

export default log;