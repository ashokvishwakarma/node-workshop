/**
 * IndexSignature
 * 
 * Type definition to support
 * access of object keys abd values
 * using bracket notation
 * 
 * Read more https://basarat.gitbooks.io/typescript/docs/types/index-signatures.html
 */
export interface IndexSignature<T> {
  [key: string]: T;
  [key: number]: T;
}