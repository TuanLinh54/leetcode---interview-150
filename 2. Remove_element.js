var removeElement = function (nums, val) {
    let writeIndex = 0;

    for (let readIndex = 0; readIndex < nums.length; readIndex++) {
        if (nums[readIndex] !== val) {
            nums[writeIndex] = nums[readIndex];
            writeIndex++
        }
    }

    return writeIndex;
};

let nums = [3, 2, 2, 3];
let val = 3;
let k = removeElement(nums, val);
console.log("Số phần tử không bằng val:", k); // Output: 2
console.log("Mảng sau khi xử lý:", nums); // Output: [2, 2, _, _]