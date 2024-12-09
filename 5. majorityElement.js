var majorityElement = function (nums) {

    let s1 = nums[0]
    let count = 0

    for (let n of nums) {
        if (count === 0) {
            s1 = n
        }
        count += (n === s1) ? 1 : -1
    }

    return s1;

};

let nums = [3, 2, 3, 5, 5, 8, 5];
console.log(majorityElement(nums)); // Output: 5
