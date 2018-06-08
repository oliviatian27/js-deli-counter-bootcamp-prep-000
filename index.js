var katzDeli = [];
var num
function takeANumber(katzDeli,customer){
  katzDeli.push(customer);
  num=katzDeli.indexOf(customer)+1;
  return 'Welcome, '+customer+'. You are number '+num+' in line.'
 
}