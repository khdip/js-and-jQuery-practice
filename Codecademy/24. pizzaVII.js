var orderCount = 0;
function takeOrder(topping, crustType) { 
console.log('Order: ' + crustType + ' crust pizza topped with ' + topping);
  orderCount = orderCount + 1;
} 
function getSubTotal(itemCount){
  return itemCount*7.5;
} 
function getTax(){
  return getSubTotal(orderCount)*0.06;
}
function getTotal() {
  return getSubTotal(orderCount) + getTax();
}
takeOrder('bacon', 'thin') 
takeOrder('cheese', 'thick')
takeOrder('veg', 'thin')

console.log (getTotal(orderCount));