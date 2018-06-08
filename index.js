var katzDeli = [];
function takeANumber(katzDeli,customer){
  katzDeli.push(customer);
  var num=katzDeli.indexOf(customer)+1;
  return 'Welcome, '+customer+'. You are number '+num+' in line.'
}
function nowServing(){
  if (katzDeli.length>0){
    var now=katzDeli[0]
    katzDeli.shift()
    return 'Currently serving '+now+'.'
  } else{
    return "There is nobody waiting to be served!"
  }
    
}