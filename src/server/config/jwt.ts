/**
 * jwt
 * @author Ashok Vishwakarma <akvlko@gmail.com>
 * jwt config
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

const jwt: IndexSignature<string> = {
  PRIVATE_KEY: env('JWT_PRIVATE_KEY', ''),
  PUBLIC_KEY: env('JWT_PUBLIC_KEY', ''),
  EXPIRY: env('JWT_EXPIRY', '2h'),
  ISSUER: env('JWT_ISSUER', 'KoaCarr')
}
export default jwt;