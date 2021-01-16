import { echo } from '../../lib/es/echo/echo';

describe('Echo', () => {
  describe('echo', () => {
    const text = 'text';
    it('should return text identity', () => {
      expect(echo(text)).toEqual(text);
    });
  });
});
