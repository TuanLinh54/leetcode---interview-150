var productExceptSelf = function (nums) {
    const n = nums.length
    const answer = Array(nums.length).fill(1)
    let tiento = 1
    for (let i = 0; i < n; i++) {
        answer[i] = tiento
        tiento *= nums[i]
    }
    let hauto = 1
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= hauto
        hauto *= nums[i]
    }
    return answer;
};

let nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));
// Output: [24, 12, 8, 6]
