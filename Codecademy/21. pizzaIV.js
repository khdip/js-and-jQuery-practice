var orderCount = 0;
function takeOrder() {
  orderCount = orderCount + 1;
} 
function getSubTotal(itemCount) {
  return itemCount * 7.5;
} 
takeOrder();
takeOrder();
console.log(getSubTotal(orderCount));