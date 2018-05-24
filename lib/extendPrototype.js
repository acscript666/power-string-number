let PowerStringNumber = require('./power-string-number');
module.exports = function() {
  /*
  for(var i in PowerStringNumber.String){
    let fun = PowerStringNumber.String[i];
    String.prototype.__defineGetter__(i, function() {
      return fun(String(this), null);
    });
  }
  */
  //String
  String.prototype.__defineGetter__('isNumberString', function(){
    return PowerStringNumber.String.isNumberString(String(this));
  });
  String.prototype.__defineGetter__('correction', function(){
    return PowerStringNumber.String.correction(String(this));
  });
  String.prototype.__defineGetter__('toCurrency', function(){
    return PowerStringNumber.String.toCurrency(String(this));
  });
  String.prototype.__defineGetter__('validateEmail', function(){
    return PowerStringNumber.String.validateEmail(String(this));
  });
  String.prototype.__defineGetter__('toTimeCount', function(){
    return PowerStringNumber.String.toTimeCount(String(this));
  });
  String.prototype.__defineGetter__('filterSpace', function(){
    return PowerStringNumber.String.filterSpace(String(this));
  });
  String.prototype.__defineGetter__('currencyToNumber', function(){
    return PowerStringNumber.String.currencyToNumber(String(this));
  });
  String.prototype.__defineGetter__('nl2br', function(){
    return PowerStringNumber.String.nl2br(String(this));
  });

  //Number
  Number.prototype.__defineGetter__('isInt', function(){
    return PowerStringNumber.Number.isInt(Number(this));
  });
  Number.prototype.__defineGetter__('isFloat', function(){
    return PowerStringNumber.Number.isFloat(Number(this));
  });
  Number.prototype.__defineGetter__('toCurrency', function(){
    return PowerStringNumber.Number.toCurrency(Number(this));
  });
  Number.prototype.__defineGetter__('toTimeCount', function(){
    return PowerStringNumber.Number.toTimeCount(Number(this));
  });
  Number.prototype.__defineGetter__('correction', function(){
    return PowerStringNumber.Number.correction(Number(this));
  });
};
