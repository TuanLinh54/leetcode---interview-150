var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;

    let slow = 0;

    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] != nums[slow]) {
            slow++;
            nums[slow] = nums[fast]
        }
    }

    return slow + 1;
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k = removeDuplicates(nums);
console.log(k); // Output: 2
console.log(nums.slice(0, k)); // Output: [1, 2]
