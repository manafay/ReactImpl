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
  return "<" + tag + getAttributes(props) + ">" + fetchChildren(args) + "</" + tag + ">";
};

module.exports = {
  createElement: createElement
};
