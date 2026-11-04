const prices = [100, 250, 80, 400]
const new_prices = prices.filter((n)=> n > 90).map((n)=> n*0.9);
console.log(new_prices)

const ages = [12, 25, 17, 30, 15]
const new_ages = ages.filter((n)=> n >= 18)
console.log(new_ages)