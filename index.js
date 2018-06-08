var katzDeli = [];
function takeANumber(katzDeli,customer){
  katzDeli.push(customer);
  var num=katzDeli.indexOf(customer);
  return "Welcome, ${customer}. You are number ${num} in line."
}