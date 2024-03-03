export class ArrayBufferConverter {
    load(buffer) {
      this.buffer = buffer;
    }
  
    toString() {
      // Проверяем, что buffer был загружен
      if (!this.buffer) {
        throw new Error('Buffer is not loaded');
      }
  
      // Создаем view для чтения данных из ArrayBuffer
      const view = new Uint16Array(this.buffer);
      
      // Преобразуем каждый элемент view в символ и объединяем в строку
      let str = '';
      for (let i = 0; i < view.length; i++) {
        str += String.fromCharCode(view[i]);
      }
      
      return str;
    }
  }
  
 export function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return ((input) => {
      const buffer = new ArrayBuffer(data.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i++) {
        bufferView[i] = input.charCodeAt(i);
      }
      return buffer;
    })(data);
  }
  