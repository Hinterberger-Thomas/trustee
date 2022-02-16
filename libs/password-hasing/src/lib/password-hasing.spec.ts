import { passwordHasing } from './password-hasing';

describe('passwordHasing', () => {
  it('should work', () => {
    expect(passwordHasing()).toEqual('password-hasing');
  });
});
