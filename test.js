let powerStringNumber = require('./lib');

var assert = require('assert');
describe('PowerStringNumber Test', function() {
  describe('String.correction', function() {
    it('should return {Number}100 when the value is "0100"', function() {
      assert.equal('0100'.correction, 100);
    });
    it('should return {Number}200 when the value is "200"', function() {
      assert.equal('200'.correction, 200);
    });
    it('should return {Number}200.345 when the value is "200.345"', function() {
      assert.equal('200.345'.correction, 200.345);
    });
    it('should return {String}192.168.1.1 when the value is "192.168.1.1"', function() {
      assert.equal('192.168.1.1'.correction, '192.168.1.1');
    });
  });

  describe('String.isNumberString', function() {
    it('should return {Boolean}false when the value is "127.0.0.1"', function() {
      assert.equal('127.0.0.1'.isNumberString, false);
    });
    it('should return {Boolean}true when the value is "105.99"', function() {
      assert.equal('105.99'.isNumberString, true);
    });
    it('should return {Boolean}false when the value is "234.ads"', function() {
      assert.equal('234.ads'.isNumberString, false);
    });
    it('should return {Boolean}true when the value is "3340446"', function() {
      assert.equal('3340446'.isNumberString, true);
    });
    it('should return {Boolean}false when the value is "adfg"', function() {
      assert.equal('adfg'.isNumberString, false);
    });
  });

  describe('String.validateEmail', function() {
    it('should return {Boolean}true when the value is "acscript666@gmail.com"', function() {
      assert.equal('acscript666@gmail.com'.validateEmail, true);
    });
    it('should return {Boolean}false when the value is "234.ads"', function() {
      assert.equal('234.ads'.validateEmail, false);
    });
  });

  describe('String.filterSpace', function() {
    it('should return {String}thisisabook when the value is "this is a book"', function() {
      assert.equal('this is a book'.filterSpace, 'thisisabook');
    });
  });

  describe('String.currencyToNumber', function() {
    it('should return {String}123,456,789 when the value is "123,456,789"', function() {
      assert.equal('123,456,789'.currencyToNumber, 123456789);
    });
  });

  describe('String.nl2br', function() {
    it('should return {String}"this<br />is<br />a<br />book" when the value is "this\\nis\\na\\nbook"', function() {
      assert.equal('this\nis\na\nbook'.nl2br, 'this<br />is<br />a<br />book');
    });
  });

  describe('String.toCurrency', function() {
    it('should return {String}12,398,745 when the value is "12398745"', function() {
      assert.equal('12398745'.toCurrency, '12,398,745');
    });
    it('should return {String}745 when the value is "745"', function() {
      assert.equal('745'.toCurrency, '745');
    });
  });

  describe('String.toTimeCount', function() {
    it('should return {String}38 天 15 小時 54 分 06 秒 when the value is "3340446"', function() {
      assert.equal('3340446'.toTimeCount, '38 天 15 小時 54 分 06 秒');
    });
  });

  describe('String.jsonToObject', function() {
    it('should return {Object}{a:"a", b:"b"} when the value is "JSON.stringify({a:"a", b:"b"})"', function() {
      assert.deepEqual(JSON.stringify({a:"a", b:"b"}).jsonToObject, {a:"a", b:"b"});
    });
    it('should return null when the value is ""', function() {
      assert.equal(''.jsonToObject, null);
    });
  });

  describe('Number.toTimeCount', function() {
    it('should return {String}38 天 15 小時 54 分 06 秒 when the value is "3340446"', function() {
      assert.equal(Number(3340446).toTimeCount, '38 天 15 小時 54 分 06 秒');
    });
  });

  describe('Number.isInt', function() {
    it('should return {Boolean}true when the value is 123898', function() {
      assert.equal(Number(123898).isInt, true);
    });
    it('should return {Boolean}false when the value is 123898.543', function() {
      assert.equal(Number(123898.543).isInt, false);
    });
  });

  describe('Number.isFloat', function() {
    it('should return {Boolean}true when the value is 123898.543', function() {
      assert.equal(Number(123898.543).isFloat, true);
    });
    it('should return {Boolean}false when the value is 123898', function() {
      assert.equal(Number(123898).isFloat, false);
    });
  });

  describe('Number.toCurrency', function() {
    it('should return {String}12,398,745 when the value is 12398745', function() {
      assert.equal(Number(12398745).toCurrency, '12,398,745');
    });
    it('should return {String}745 when the value is "745"', function() {
      assert.equal(Number(745).toCurrency, '745');
    });
  });

  describe('Number.correction', function() {
    it('should return {Number}3340446 when the value is 3340446', function() {
      assert.equal(Number(3340446).correction, 3340446);
    });
  });
});