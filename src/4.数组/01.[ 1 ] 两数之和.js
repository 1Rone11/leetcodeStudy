/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @LastEditTime: 2023-03-05 22:11:47
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\4.数组\01.[ 1 ] 两数之和.js
 * @Description: 
 */
/**
 * * 题目名称：两数之和
 * * 题目地址：https://leetcode-cn.com/problems/two-sum
 *  给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
    你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
    你可以按任意顺序返回答案。
    输入：nums = [2,7,11,15], target = 9
    输出：[0,1] 
    解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
    
    输入：nums = [3,2,4], target = 6
    输出：[1,2]
 */

// * 思路：

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let sumArr = [];
    const n = nums.length - 1
    for (let i = 0; i <= n - 1; i++) {
        for (let j = i + 1; j <= n; j++) {
            if (nums[i] + nums[j] === target) {
                sumArr.push(i);
                sumArr.push(j)
            }
        }
    }
    return sumArr
};

// 测试用例
let test = [2, 7, 11, 15]
let test1 = [3, 2, 4]

console.time('执行用时');
console.log(twoSum(test, 2));
// console.log(twoSum(test1, 6));
console.timeEnd('执行用时');