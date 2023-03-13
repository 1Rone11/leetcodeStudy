/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @LastEditTime: 2023-03-13 22:04:44
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\4.数组\07.[ 53 ] 最大子序和.js
 * @Description: 
 */
/**
 * * 题目名称：最大子序和
 * * 题目地址：https://leetcode-cn.com/problems/maximum-subarray
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 子数组 是数组中的一个连续部分。
示例 1：

输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
示例 2：
输入：nums = [1]
输出：1
示例 3：

输入：nums = [5,4,-1,7,8]
输出：23
 */

// * 思路：将 【连续】看作重点，利用动态规划的思想拆分以每一项结尾的总和，如果数据已经小于等于0，那么后一项加上他就不会再加大，从而直接另起炉灶
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let dp = new Array(nums.length)
    const len = nums.length
    // dp[i]表示以num[i]结尾的最大连续子数组和
    dp[0] = nums[0]

    for (let i = 1; i < len; i++) {
        if (dp[i - 1] > 0) {
            dp[i] = dp[i - 1] + nums[i]
        } else {
            dp[i] = nums[i]
        }
    }

    const max = Math.max(...dp)
    return max
};


// 测试用例
let test = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
let test2 = [1]
let test3 = [5, 4, -1, 7, 8]

console.time('执行用时');
console.log(maxSubArray(test));
console.log(maxSubArray(test2));
console.log(maxSubArray(test3));
console.timeEnd('执行用时');