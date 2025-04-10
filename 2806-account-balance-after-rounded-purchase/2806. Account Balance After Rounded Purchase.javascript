/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function(purchaseAmount) {

  // 9 => 10
  // 4 => 0
  // 55 => 60

  let ones = purchaseAmount % 10

  let roundedAmount
  if(ones >= 5) {
    roundedAmount = (purchaseAmount - ones) + 10
  } else {
    roundedAmount = purchaseAmount - ones
  }
  return 100 - roundedAmount
};