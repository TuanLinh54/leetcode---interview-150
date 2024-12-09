var RandomizedSet = function () {
    this.map = new Map();
    this.list = [];
};

RandomizedSet.prototype.insert = function (val) {
    if (this.map.has(val)) {
        return false;
    }
    this.list.push(val);
    this.map.set(val, this.list.length - 1);
    return true;
};

RandomizedSet.prototype.remove = function (val) {
    if (!this.map.has(val)) {
        return false;
    }

    const index = this.map.get(val);
    const lastElement = this.list[this.list.length - 1]
    // đổi chỗ val và pt cuối
    this.list[index] = lastElement;
    this.map.set(lastElement, index);
    // xóa pt cuối
    this.list.pop();
    this.map.delete(val);
    return true;
};

RandomizedSet.prototype.getRandom = function () {
    const randomIndex = Math.floor(Math.random() * this.list.length);
    return this.list[randomIndex]
};

let randomizedSet = new RandomizedSet();

console.log(randomizedSet.insert(1));  // Output: true
console.log(randomizedSet.remove(2));  // Output: false
console.log(randomizedSet.insert(2));  // Output: true
console.log(randomizedSet.getRandom()); // Output: 1 or 2
console.log(randomizedSet.remove(1));  // Output: true
console.log(randomizedSet.insert(2));  // Output: false
console.log(randomizedSet.getRandom()); // Output: 2

