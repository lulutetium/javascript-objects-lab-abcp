var recipes = {prop: 1};

function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({},recipes,object[key]=value);;
}
