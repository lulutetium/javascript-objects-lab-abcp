var recipes = {prop: 1};


function updateObjectWithKeyAndValue(object,key,value){
  var newObj = Object.assign({},object);
  newObj[key]=value;
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  return Object.assign(object,object[key]=value);
}

