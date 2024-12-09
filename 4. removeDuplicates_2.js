var removeDuplicates = function (nums) {
    if (nums.length <= 2) return nums.length;

    let slow = 2;

    for (let fast = 2; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow - 2]) {
            nums[slow] = nums[fast]
            slow++;
        }
    }

    return slow;
};

let nums = [1, 1, 1, 2, 2, 3];
let k = removeDuplicates(nums);
console.log(k); // Output: 5
console.log(nums.slice(0, k)); // Output: [1, 1, 2, 2, 3]
