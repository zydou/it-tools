import { buildLocalizedUrl } from './i18n.models';
import { describe, test, expect } from 'vitest';

describe('i18n models', () => {
  describe('buildLocalizedUrl', () => {
    test('build an url prefixed with the language', () => {
      expect(buildLocalizedUrl({lang: 'fr', path: '/tools/token-generator'})).toBe('/fr/tools/token-generator');
      expect(buildLocalizedUrl({lang: 'en', path: '/token-generator'})).toBe('/en/token-generator');
      expect(buildLocalizedUrl({path: '/token-generator'})).toBe('/token-generator');
    });

    test('the path may not start with a slash', () => {
      expect(buildLocalizedUrl({lang: 'fr', path: 'tools/token-generator'})).toBe('/fr/tools/token-generator');
      expect(buildLocalizedUrl({lang: 'en', path: 'token-generator'})).toBe('/en/token-generator');
      expect(buildLocalizedUrl({path: 'token-generator'})).toBe('/token-generator');
    });
  });
});
 