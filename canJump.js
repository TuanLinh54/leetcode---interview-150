var canJump = function (nums) {

    let maxJump = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > maxJump) {
            return false;
        }

        maxJump = Math.max(maxJump, i + nums[i])

        if (maxJump >= nums.length - 1) {
            return true
        }
    }
    return false
};

// let nums = [2, 3, 1, 1, 4];
// console.log(canJump(nums)); // Output: true

let nums = [3, 2, 1, 0, 4];
console.log(canJump(nums)); // Output: false
