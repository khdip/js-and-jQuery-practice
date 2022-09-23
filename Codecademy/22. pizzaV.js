var orderCount = 0;
function takeOrder(topping, crustType) {
  orderCount = orderCount + 1;
  console.log('Order: ' + crustType + ' crust topped with ' + topping);
} 
function getSubTotal(itemCount) {
  return itemCount * 7.5;
}
takeOrder('cheese', 'thin');
takeOrder('bacon', 'thick');
takeOrder('cheese', 'thick');

console.log('Total Price: ' + getSubTotal(orderCount));