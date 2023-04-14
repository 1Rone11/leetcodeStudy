/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @LastEditTime: 2023-03-19 17:47:15
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\4.数组\12.[ 169 ] 多数元素.js
 * @Description: 
 */
/**
 * * 题目名称：多数元素
 * * 题目地址：https://leetcode-cn.com/problems/majority-element
 * 
 *  给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
    你可以假设数组是非空的，并且给定的数组总是存在多数元素。
    示例 1：
    输入：nums = [3,2,3]
    输出：3
    示例 2：
    输入：nums = [2,2,1,1,1,2,2]
    输出：2
 */

import _ from 'lodash'
// * 思路：
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const maxNum = nums.length / 2
    const numsMap = _.countBy(nums)
    for (let k in numsMap) {
        if (numsMap[k] > maxNum) {
            return k
        }
    }
};


// 测试用例
let test = [2, 2, 1, 1, 1, 2, 2]
let test2 = [3, 2, 3]

console.time('执行用时');
console.log(majorityElement(test));
console.log(majorityElement(test2));
console.timeEnd('执行用时');