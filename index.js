var katzDeli = [];
function takeANumber(katzDeli,customer){
  katzDeli.push(customer);
  var number=katzDeli.indexOf(customer)+1;
  return "Welcome, ${customer}. You are number ${number} in line."
}