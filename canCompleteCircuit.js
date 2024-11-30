var canCompleteCircuit = function (gas, cost) {
    let totalFuel = 0;
    let currentFuel = 0;
    let startIndex = 0;

    for (let i = 0; i < gas.length; i++) {
        totalFuel += gas[i] - cost[i]
        currentFuel += gas[i] - cost[i]

        if (currentFuel < 0) {
            startIndex = i + 1;
            currentFuel = 0;
        }
    }

    return totalFuel >= 0 ? startIndex : -1;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])); // Output: 3