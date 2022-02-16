import * as argon2 from 'argon2';
import { randomBytes } from 'crypto';

export const hash = async (text: string): Promise<string> =>
  await argon2.hash(text, {
    salt: randomBytes(16),
  });

export const verify = async (hash: string, plain: string): Promise<boolean> =>
  await argon2.verify(hash, plain);

try {
  const hash = await argon2.hash('password');
} catch (err) {
  //...
}
