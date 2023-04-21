/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @LastEditTime: 2023-04-20 12:30:53
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\4.数组\24.[ 1480 ] 一维数组的动态和.js
 * @Description: 
 */
/**
 * * 题目名称：一维数组的动态和
 * * 题目地址：https://leetcode-cn.com/problems/running-sum-of-1d-array
 * 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。
    请返回 nums 的动态和。
    示例 1：
    输入：nums = [1,2,3,4]
    输出：[1,3,6,10]
    解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4] 。
    示例 2：
    输入：nums = [1,1,1,1,1]
    输出：[1,2,3,4,5]
    解释：动态和计算过程为 [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1] 。
    示例 3：
    输入：nums = [3,1,2,10,1]
    输出：[3,4,6,16,17]
 */

// * 思路：
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    const n = nums.length
    let sumArr = new Array(n)
    sumArr[0] = nums[0]
    for (let i = 1; i < n; i++) {
        sumArr[i] = nums[i] + sumArr[i - 1]
    }
    return sumArr
};


// 测试用例
let nums = [1, 2, 3, 4]
let nums2 = [1, 1, 1, 1, 1]

console.time('执行用时');
console.log(runningSum(nums));
console.log(runningSum(nums2));
console.timeEnd('执行用时');