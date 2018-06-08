var katzDeli = [];
var num
function takeANumber(katzDeli,customer){
  katzDeli.push(customer);
  num=katzDeli.indexOf(customer);
  return "Welcome,  You are number ${num} in line."
 
}