var recipes = {prop: 1};

var newo

function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({},object,object[key]=value);
  // this TEST IS FUCKED FIGURE OUT WHY DUMMY
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  return Object.assign(object,object[key]=value);
}

