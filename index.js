var recipes = {prop: 1};

function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({},object,object[key]=value);
  // this TEST IS FUCKED FIGURE OUT WHY DUMMY
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  return Object.assign(object,object[key]=value);
}

