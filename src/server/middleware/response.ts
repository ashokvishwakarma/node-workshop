/**
 * response
 * @author Ashok Vishwakarma <akvlko@gmail.com>
 * middleware for tracking responses
 */

/**
 * Context
 * 
 * Koa context type
 */
import { Context } from 'koa';

/**
 * config
 * 
 * Global app config
 */
import config from '../config';

/**
 * responses, elapseTime from helper
 */
import { elapseTime } from '../utility/helper';

/**
 * response
 * 
 * Responses constant
 */
import { responses } from '../constant';

/**
 * logger
 * 
 * Gloabal application logger
 */
import logger from '../utility/logger';

/**
 * logRequest
 *
 * method to log request
 * @param {date} start
 * @param {object} ctx
 */
const logRequest = (start: Date, ctx: Context): void => {
  /**
   * done
   *
   * method to bind on request finish and close
   * @param {event} event
   */
  const done = (event: string): void => {
    res.removeListener('finish', onFinish);
    res.removeListener('close', onClose);

    const resp: any = responses[ctx.status];

    if (!resp) {
      return;
    }

    if (
      config.log.LEVEL.toLowerCase() === 'error' && 
      resp.type.toLowerCase() !== 'error'
    ) {
      return;
    }

    let _log_method: string = 'info';

    if (resp.type.toLowerCase() === 'error') {
      _log_method = 'error';
    }

    const upstream: string =
      resp.type == 
        'error' ? 'xxx' : event === 'close' ? '-x-' : '-->';
    
    logger[_log_method](
      `${upstream} ${ctx.method} ${ctx.originalUrl} ${ctx.status} ${elapseTime(
        start
      )} ${resp.message}`
    );
  };

  const res: any = ctx.res;

  const onFinish: Function = done.bind(null, 'finish');

  const onClose: Function = done.bind(null, 'finish');

  res.once('finish', onFinish);
  res.once('close', onClose);
};

/**
 * response
 * 
 * responee middleware for Koa
 * @param {object} ctx
 * @param {function} next
 */
export default async (ctx: Context, next: Function): Promise<any> => {
  try {
    const start = new Date();
    await next();
    
    logRequest(start, ctx);

  } catch (err) {
    console.log(err);
    logger.error(err.message);
    throw new Error(err);
  }
};