function newPrice(currentPrice, discount) {
  if (
    typeof currentPrice !== "number" ||
    typeof discount !== "number" ||
    discount < 0 ||
    discount > 100
  ) {
    return "Invalid";
  }

  const discountedPrice = currentPrice - (currentPrice * discount) / 100;

  return discountedPrice.toFixed(3);
}

// const result = newPrice(2500, 17.17);
// console.log(result);
