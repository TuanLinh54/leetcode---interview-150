var trap = function (height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left]
            } else {
                water += leftMax - height[left]
            }
            left++;
        } else {
            if (height[right] > rightMax) {
                rightMax = height[right]
            } else {
                water += rightMax - height[right]
            }
            right--;
        }
    }

    return water;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6