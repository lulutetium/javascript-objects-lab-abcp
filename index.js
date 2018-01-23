var recipes = {prop: 1};

function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({},object,object[key]=value);;
}