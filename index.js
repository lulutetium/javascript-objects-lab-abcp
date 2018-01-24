var recipes = {prop: 1};

function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({},object,object[key]=value);
  // this is not mutating the object
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  return Object.assign(object,object[key]=value);
}

destructivelyUpdateObjectWithKeyAndValue(recipes,'prop2',2);
