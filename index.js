
var isFunction = function(arg){
  return typeof(arg) === 'function';
};

var isString = function(arg){
  return typeof(arg) === 'string';
};

var isObject = function(arg){
  return arg && typeof(arg) === 'object';
};

var isArray = function(arg){
  return isObject(arg) && arg instanceof Array;
};

var find = function(str, argument) {
  var seen = [];
  var find_ = function(str, argument){
    var current, result, i;
    if (seen.indexOf(argument) != -1){
      return false;
    }
    if (isFunction(argument)){
      return false;
    } else if (isString(argument)){
      if (argument.indexOf(str) !== -1){
        return argument;
      }
      return false;
    } else if (isArray(argument)){
      seen.push(argument);
      for (i = 0; i < argument.length; i++){
        current = find_(str, argument[i]);
        if (current){
          if (!result){
            result = [];
          }
          result[i] = current;
        }
      }
      return result;
    } else if (isObject(argument)){
      seen.push(argument);
      var key_result = find_(str, Object.keys(argument));
      var keys = Object.keys(argument);
      for (i = 0; i < keys.length; i++){
        current = find_(str, argument[keys[i]]);
        if (current){
          if (!result){
            result = {};
          }
          result[keys[i]] = current;
        }
      }
      if (key_result){
        if (!result){
          result = {};
        }
        for (i = 0; i < key_result.length; i++){
          if (key_result[i] && (!key_result[i] in result)){
            result[key_result[i]] = undefined;
          }
        }
      }
    }
    return result;
  }
  return find_(str, argument);
};

module.exports = find;
