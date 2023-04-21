/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @LastEditTime: 2023-04-21 08:48:10
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\4.数组\26.[ 268 ] 丢失的数字.js
 * @Description: 
 */
/**
 * * 题目名称：丢失的数字
 * * 题目地址：https://leetcode-cn.com/problems/missing-number
 * 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。
示例 1：
输入：nums = [3,0,1]
输出：2
解释：n = 3，因为有 3 个数字，所以所有的数字都在范围 [0,3] 内。2 是丢失的数字，因为它没有出现在 nums 中。
示例 2：
输入：nums = [0,1]
输出：2
解释：n = 2，因为有 2 个数字，所以所有的数字都在范围 [0,2] 内。2 是丢失的数字，因为它没有出现在 nums 中。
示例 3：
输入：nums = [9,6,4,2,3,5,7,0,1]
输出：8
解释：n = 9，因为有 9 个数字，所以所有的数字都在范围 [0,9] 内。8 是丢失的数字，因为它没有出现在 nums 中。
示例 4：
输入：nums = [0]
输出：1
解释：n = 1，因为有 1 个数字，所以所有的数字都在范围 [0,1] 内。1 是丢失的数字，因为它没有出现在 nums 中。
 */

// * 思路：
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const l = nums.length;
    let res;
    const fillArr = new Array(l)
    for (let i = 0; i <= l; i++) {
        fillArr[i] = i
    }

    for (let item of fillArr) {
        if (nums.indexOf(item) === -1) {
            res = item
        }
    }
    return res
};


// 测试用例
let test = [9, 6, 4, 2, 3, 5, 7, 0, 1]

console.time('执行用时');
console.log(missingNumber(test));
console.timeEnd('执行用时');