var katzDeli = [];
function takeANumber(katzDeli,customer){
  katzDeli.push(customer)
  return katzDeli.findIndex(customer)
}