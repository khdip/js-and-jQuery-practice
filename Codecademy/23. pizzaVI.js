var orderCount = 0;

function takeOrder() {
  orderCount = orderCount + 1;
} 
function getSubTotal(itemCount) {
  return itemCount * 7.5;
} 

function getTax() {
  return getSubTotal(orderCount) * 0.06;
} 

function getTotal() {
  return getSubTotal(orderCount) + getTax();
}

takeOrder();
takeOrder();
console.log(getTotal());