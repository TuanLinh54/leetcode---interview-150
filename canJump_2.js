var jump = function (nums) {

    let jumps = 0
    let currentEnd = 0
    let maxJump = 0

    for (let i = 0; i < nums.length - 1; i++) {
        maxJump = Math.max(maxJump, i + nums[i])
        if (i === currentEnd) {
            jumps++;
            currentEnd = maxJump
        }
    }
    return jumps
};

// let nums = [2, 3, 1, 1, 4];
// console.log(jump(nums)); // Output: 2

let nums = [2, 3, 0, 1, 4];
console.log(jump(nums)); // Output: 2
