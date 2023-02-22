/**
 * * 题目名称：反转字符串
 * * 题目地址：https://leetcode-cn.com/problems/reverse-string
 */

// * 思路：使用双指针left/right
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    const n = s.length
    for (let left = 0, right = n - 1; left < right; left++, right--) {
        [s[left], s[right]] = [s[right], s[left]] //解构赋值
        //基本交换
        // let temp;
        // s[left] = temp;
        // temp = s[right];
        // s[right] = s[left]
    }
    return s
};


// 测试用例
let test = ["h", "e", "l", "l", "o"]

console.time('执行用时');
console.log(reverseString(test));
console.timeEnd('执行用时');