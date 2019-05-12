import env from '../utility/env';
import { IndexSignature } from '../../types';

const jwt: IndexSignature = {
  PRIVATE_KEY: env('JWT_PRIVATE_KEY', ''),
  PUBLIC_KEY: env('JWT_PUBLIC_KEY', ''),
  EXPIRY: env('JWT_EXPIRY', '2h'),
  ISSUER: env('JWT_ISSUER', 'KoaCarr')
}
export default jwt;