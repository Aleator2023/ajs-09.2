import { ArrayBufferConverter } from '../src/ArrayBuffer'
import { getBuffer } from '../src/ArrayBuffer'

describe('ArrayBufferConverter', () => {
    let converter;
    let buffer;
  
    beforeEach(() => {
      // Инициализация перед каждым тестом
      converter = new ArrayBufferConverter();
      buffer = getBuffer();
    });
  
    test('should load buffer correctly', () => {
      expect(() => converter.load(buffer)).not.toThrow();
    });
  
    test('should throw error when buffer is not loaded', () => {
      const newConverter = new ArrayBufferConverter();
      expect(() => newConverter.toString()).toThrow('Buffer is not loaded');
    });
  
    test('should convert ArrayBuffer to string correctly', () => {
      converter.load(buffer);
      const result = converter.toString();
      const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
      expect(result).toBe(expected);
    });
  });
  