var rotate = function (nums, k) {
    const n = nums.length;
    k = k % n;

    function reverse(arr, start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]]
            start++;
            end--;
        }
    }

    reverse(nums, 0, n - 1);

    reverse(nums, 0, k - 1);

    reverse(nums, k, n - 1)
};



let nums = [-1, -100, 3, 99]
let k = 2;
rotate(nums, k);
console.log(nums); // Output: [5, 6, 7, 1, 2, 3, 4]


// Cách 2:
// var rotate = function (nums, k) {

//     k = k % nums.length;
//     // Slice and concatenate
//     nums.unshift(...nums.splice(nums.length - k));


// };