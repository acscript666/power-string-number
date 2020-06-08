let PowerStringNumber = {
  shareFunction: {
    validateString: function(value){
      if(typeof(value) !== 'string') throw new Error('value must be a string');
    },
    isNumberString: function(value){
      if(!PowerStringNumber.String.isNumberString(value)) throw new Error('value must be a Number String');
    }
  },
  Number: {
    isInt: function(value){
      return value % 1 === 0;
    },
    isFloat: function(value){
      return Number(value) === value && value % 1 !== 0;
    },
    toCurrency: function(value){
      return PowerStringNumber.String.toCurrency(String(value));
    },
    toTimeCount: function(value){
      return PowerStringNumber.String.toTimeCount(String(value));
    },
    correction: function (value) {
      return PowerStringNumber.String.correction(String(value));
    }
  },
  String: {
    isNumberString: function(value){
      PowerStringNumber.shareFunction.validateString(value);
      let reg = /^[-+]?\d+$/;
      if(reg.test(value)) return true;
      let arr = value.split('.');
      if(arr.length == 2){
        if(!reg.test(arr[0])) return false;
        if(!reg.test(arr[1])) return false;
        value = parseFloat(value);
        if(!isNaN(value)) return true;
      }
      return false;
    },
    correction: function(value){
      PowerStringNumber.shareFunction.validateString(value);
      if(PowerStringNumber.String.isNumberString(value)) return Number(value);
      return value;
    },
    toCurrency: function(value){
      PowerStringNumber.shareFunction.validateString(value);
      PowerStringNumber.shareFunction.isNumberString(value);
      return value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    },
    validateEmail: function(value){
      PowerStringNumber.shareFunction.validateString(value);
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(value.toLowerCase());
    },
    toTimeCount: function(value){
      PowerStringNumber.shareFunction.validateString(value);
      PowerStringNumber.shareFunction.isNumberString(value);
      var time = parseInt(value, 10);// 需要转换的时间秒
      var days = ~~(time / 86400);
      var hrs = ~~((time % 86400) / 3600);
      var mins = ~~((time % 3600) / 60);
      var secs = (time % 60).toFixed(0);

      // Output like "1:01" or "4:03:59" or "123:03:59"
      var ret = "";
      ret += days > 0 ? "" + days + " 天 " + (hrs < 10 ? "0" : "") : '';
      ret += hrs > 0 ? "" + hrs + " 小時 " + (mins < 10 ? "0" : "") : '';
      ret += mins > 0 ? "" + mins + " 分 " + (secs < 10 ? "0" : "") : '';
      ret += "" + secs + " 秒";
      return ret;
    },
    filterSpace:function(value){
      PowerStringNumber.shareFunction.validateString(value);
      return value.replace(/\s/g, '');
    },
    currencyToNumber: function(value){
      PowerStringNumber.shareFunction.validateString(value);
      return Number(value.replace(/[^0-9\.-]+/g,""));
    },
    nl2br: function(value){
      PowerStringNumber.shareFunction.validateString(value);
      return value.replace(/\n/g, "<br />");
    },
    jsonToObject: function(value){
      if(!value || value == "") return null;
      try {
        return JSON.parse(value);
      }
      catch(err) {
        return null;
      }
    }
  }


}
module.exports = PowerStringNumber;