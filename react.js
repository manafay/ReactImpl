var fetchChildren = function(child){
  result = "\n";
  for(var x in child){
    result += child[x] + "\n";
  }
  return result;
};

var getAttributes = function(attr){
  result = "";
  for(var key in attr){
    if(attr.hasOwnProperty(key)){
      result += " " + key + "=" + "\"" +attr[key] + "\"";
    }
  }
  return result;
};

var createElement = function(tag, props, ...args){
  return "<" + tag + getAttributes(transformAttr(props)) + ">" + fetchChildren(args) + "</" + tag + ">";
};

var transformAttr = function(attr){
  result = attr;
  for(var key in result){
    if(key === 'className'){
      result['class'] = result[key];
      delete result[key];
    }
    else if (key === 'htmlFor') {
      result['for'] = result[key];
      delete result[key];
    }
    else if (key === 'onClick'){
      result['on-click'] = result[key];
      delete result[key];
    }
  }
  return result;
};



module.exports = {
  createElement: createElement
};
