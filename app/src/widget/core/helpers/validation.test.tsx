import { describe, expect, test } from '@/../../testSetup';
import {
  validateLang, validatePrice, validateTheme
} from '@/core/helpers/validation';
import { Langs } from '@/core/i18n/types';
import { Themes } from '@/core/theme/types';

describe('validatePrice', () => {
  test('Throws an error given no price attribute', () => {
    expect(() => validatePrice()).toThrowError('Missing price attribute');
  })

  test('Throws an error given not numeric price attribute', () => {
    expect(() => validatePrice('not-a-number'))
      .toThrowError('Price attribute is not a number');
  })

  test('Throws an error given a negative price attribute', () => {
    expect(() => validatePrice('-1000'))
      .toThrowError('Price attribute should be positive');
  })

  test('Returns a numeric price value given a valid price attribute', () => {
    expect(validatePrice('39999')).toEqual(39999);
  })
});

describe('validateTheme', () => {
  test('Returns the \'base\' theme given no theme attribute', () => {
    expect(validateTheme()).toEqual(Themes.base);
  })

  test('Returns the \'base\' theme given an invalid theme attribute', () => {
    expect(validateTheme('invalid-theme')).toEqual(Themes.base);
  })

  test('Returns the given theme given a valid theme attribute', () => {
    expect(validateTheme(Themes.dark)).toEqual(Themes.dark);
  })
});

describe('validateLang', () => {
  test('Returns the \'en\' language given no lang attribute', () => {
    expect(validateLang()).toEqual(Langs.en);
  })

  test('Returns the \'en\' language given an invalid lang attribute', () => {
    expect(validateLang('invalid-lang')).toEqual(Langs.en);
  })

  test('Returns the given language given a valid lang attribute', () => {
    expect(validateLang(Langs.ca)).toEqual(Langs.ca);
  })
});
