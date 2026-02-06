function newPrice(currentPrice, discount) {
  if (
    typeof currentPrice !== "number" ||
    typeof discount !== "number" ||
    discount < 0 ||
    discount > 100
  ) {
    return "Invalid";
  }

  const discountedPrice = (currentPrice * discount) / 100;
  const payablePrice = currentPrice - discountedPrice;

  return payablePrice.toFixed(3);
}

const result = newPrice(2000, 17.17);
console.log(result);
