/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @LastEditTime: 2023-03-19 10:41:48
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\4.数组\11.[ 剑指 Offer 03 ] 数组中重复的数字.js
 * @Description: 
 */
/**
 * * 题目名称：数组中重复的数字
 * * 题目地址：https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof
 *  找出数组中重复的数字。
    在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
    数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
    请找出数组中任意一个重复的数字。
    示例 1：
    输入：
    [2, 3, 1, 0, 2, 5, 3]
    输出：2 或 3 
 */

// * 思路：使用lodash的方法(简易) 方法1
import _ from 'lodash'
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
    const res = _.countBy(nums)
    for (let k in res) {
        if (res[k] != 1) {
            return k
        }
    }
};

//方法2:手动建立hash表
var findRepeatNumber1 = function (nums) {
    let repeatMap = new Map()
    for (let k in nums) {
        if (repeatMap.has(nums[k])) {
            return nums[k]
        } else {
            repeatMap.set(nums[k], 1)
        }
    }
};

// 测试用例
let test = [3, 1, 0, 2, 5, 3]

console.time('执行用时');
// console.log(findRepeatNumber(test));
console.log(findRepeatNumber1(test));
console.timeEnd('执行用时');