/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @LastEditTime: 2023-03-14 12:39:51
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\4.数组\08.[ 283 ] 移动零.js
 * @Description: 
 */
/**
 * * 题目名称：移动零
 * * 题目地址：https://leetcode-cn.com/problems/move-zeroes
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
    【请注意 ，必须在不复制数组的情况下原地对数组进行操作。】
    示例 1:
    输入: nums = [0,1,0,3,12]
    输出: [1,3,12,0,0]
    示例 2:

    输入: nums = [0]
    输出: [0]
 */

// * 思路：
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
   let zeroNum = 0
   for (let k = 0; k < nums.length; k++) {
      if (nums[k] === 0) {
         zeroNum++
         nums.splice(k, 1)
         k--
      }
   }
   for (let i = 0; i < zeroNum; i++) {
      nums.push(0)
   }
   return nums
};


// 测试用例
let test = [0, 1, 0, 3, 12]
let test2 = [0, 0, 1]

console.time('执行用时');
console.log(moveZeroes(test));
// console.log(moveZeroes(test2));
console.timeEnd('执行用时');