# power-string-number.js

強化 String 與 Number prototype 的語法糖

Please visit my [Github](https://github.com/acscript666/power-string-number) 

## Installation
    npm install power-string-number

## Strengthen

#### Number
- Number.isInt return {Boolean}
- Number.isFloat return {Boolean}
- Number.toCurrency return {String}
- Number.toTimeCount return {String}
- Number.correction return {Number}

#### String
- String.isNumberString return {Boolean}
- String.correction return {String} if {String}, {Number} if {NumberString}
- String.toCurrency return {String}
- String.validateEmail return {Boolean}
- String.toTimeCount return {String}
- String.filterSpace return {String}
- String.currencyToNumber return {Number}
- String.nl2br return {String}
- String.jsonToObject return {Object} or null

## Useage
```js
let powerStringNumber = require('powert-string-number');
//String
console.log('0100'.correction);                       //output {Number} 100
console.log('200'.correction);                        //output {Number} 200
console.log('200.345'.correction);                    //output {Number} 200.345
console.log('127.0.0.1'.correction);                  //output {String} 127.0.0.1
console.log('127.0.0.1'.isNumberString);              //output {Boolean} false
console.log('105.99'.isNumberString);                 //output {Boolean} true
console.log('234.ads'.isNumberString);                //output {Boolean} false
console.log('ac@sayyogames.com'.validateEmail);       //output {Boolean} true
console.log('this is a book'.filterSpace);            //output {String} thisisabook
console.log('this\nis\na\nbook'.nl2br);               //output {String} this<br />is<br />a<br />book
console.log('12398745'.toCurrency);                   //output {String} 12,398,745
console.log('12398745'.isNumberString);               //output {Boolean} true
console.log('adfg'.isNumberString);                   //output {Boolean} false
console.log('3340446'.toTimeCount);                   //output {String} 38 天 15 小時 54 分 06 秒
console.log('3,340,446'.currencyToNumber);            //output {Number} 3340446
console.log(JSON.stringify({a:"a", b:"b"}).jsonToObject);            //output {Object} {a:"a", b:"b"}
//Number
console.log(Number(3340446).toTimeCount);             //output {String} 38 天 15 小時 54 分 06 秒
console.log(Number(123898).isInt);                    //output {Boolean} true
console.log(Number(123898.543).isInt);                //output {Boolean} false
console.log(Number(123898).isFloat);                  //output {Boolean} false
console.log(Number(123898.543).isFloat);              //output {Boolean} true
console.log(Number(3340446).toCurrency);              //output {String} 3,340,446
console.log(Number(3340446).correction);              //output {Number} 3340446
```

or a slightly less nifty way which doesn't extend `String.prototype` and `Number.prototype`

```js
var powerStringNumber = require('powerStringNumber/safe');

console.log(powerStringNumber.String.correction('0100'));  //output {Number} 100
console.log(powerStringNumber.String.correction('200'));  //output {Number} 200
console.log(powerStringNumber.String.correction('200.345'));  //output {Number} 200.345
console.log(powerStringNumber.String.isNumberString('127.0.0.1'));  //output {Boolean} false
console.log(powerStringNumber.String.validateEmail('ac@sayyogames.com'));  //output {Boolean} true
console.log(powerStringNumber.Number.isFloat(123898));  //output {Boolean} false