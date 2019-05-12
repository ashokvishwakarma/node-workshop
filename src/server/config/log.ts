import env from '../utility/env';
import { IndexSignature } from '../../types';

const log: IndexSignature = {
  PATH: env('LOG_PATH', ''),
  LEVEL: env('LOG_LEVEL', 'DEBUG'),
  FILE_NAME_FORMAT: env('LOG_FILE_NAME_FORMAT', 'YYY-MM-DD')
};

export default log;