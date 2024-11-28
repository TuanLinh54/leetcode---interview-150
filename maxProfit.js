var maxProfit = function (prices) {
    let minPrice = Infinity
    let maxPf = 0

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price
        } else {
            maxPf = Math.max(maxPf, price - minPrice)
        }
    }
    return maxPf;
};

let prices = [7, 6, 4, 3, 1]
maxProfit(prices)
console.log(maxProfit(prices));
