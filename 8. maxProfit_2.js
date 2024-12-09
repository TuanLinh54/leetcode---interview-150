var maxProfit = function (prices) {
    let maxPf = 0

    for (let i = 0; i < prices.length; i++) {
        if (prices[i + 1] > prices[i]) {
            maxPf += prices[i + 1] - prices[i]
        }
    }
    return maxPf;
};

let prices = [1, 2, 3, 4, 5]
let result = maxProfit(prices)
console.log(result);
