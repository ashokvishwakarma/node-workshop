/**
 * index.ts
 * 
 * Main server file
 */

/**
 * Koa
 * 
 * Koa Application
 * @url https://www.npmjs.com/package/koa
 */
import * as Koa from 'koa';

/**
 * mongoose
 * 
 * MongoDB ORM
 * @url https://www.npmjs.com/package/mongoose
 */
import * as mongoose from 'mongoose';

/**
 * http2
 * 
 * NodeJs http2 server
 */
import * as http2 from 'http2';

/**
 * readFileSync
 * 
 * Help to read file in sync
 */
import { readFileSync } from 'fs';

/**
 * config
 * 
 * KoaCart application configuration
 */
import config from './config';

/**
 * response
 * 
 * Response middleware to track requests and response
 */
import response from './middleware/response';

/**
 * logger
 * 
 * Logger utility for KoaCart application
 */
import logger from './utility/logger';

/**
 * routes
 * 
 * App routes
 */
import routes from './routes';

/**
 * mongoose setup
 * 
 * Setting up the mongoose to connect with MongoDb database
 */
mongoose.connect(config.database.URI, {
  useNewUrlParser: true
});

/**
 * mongoose error handler
 */
mongoose.connection.on('error', error => {
  logger.error(error);
});

/**
 * app
 * 
 * Koa app
 */
const app: Koa = new Koa();

app
  .use(response)
  .use(routes);

if(config.app.PROTOCOL.toLowerCase() === 'https' && config.app.SSL_CERT !== '' && config.app.SSL_KEY !== '') {
  /**
   * _server
   * 
   * HTTP2 Secure Server using SSL
   */
  const _server: http2.Http2SecureServer = http2.createSecureServer({
    key: readFileSync(config.app.SSL_KEY, 'utf8'),
    cert: readFileSync(config.app.SSL_CERT, 'utf8')
  }, app.callback()).listen(config.app.PORT, config.app.HOST, () => {
    console.log(`Server started at ${config.app.PROTOCOL}://${config.app.HOST}:${config.app.PORT}`);
    logger.info(`Server started at ${config.app.PROTOCOL}://${config.app.HOST}:${config.app.PORT}`);
  });

  /**
   * Server Error handler
   */
  _server.on('error', error => {
    logger.error(error);
  });
}else {
  /**
   * Server Error handler
   */
  app.on('error', error => {
    logger.error(error);
  });

  /**
   * Listening
   */
  app.listen(config.app.PORT, config.app.HOST, () => {
    console.log(`Server started at ${config.app.PROTOCOL}://${config.app.HOST}:${config.app.PORT}`);
    logger.info(`Server started at ${config.app.PROTOCOL}://${config.app.HOST}:${config.app.PORT}`);
  });
}