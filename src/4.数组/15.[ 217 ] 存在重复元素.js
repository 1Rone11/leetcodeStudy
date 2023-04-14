/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @LastEditTime: 2023-03-31 08:26:13
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\4.数组\15.[ 217 ] 存在重复元素.js
 * @Description: 
 */
/**
 * * 题目名称：存在重复元素
 * * 题目地址：https://leetcode-cn.com/problems/contains-duplicate
 */

// * 思路：
import _ from 'lodash'
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const numsMap = _.countBy(nums)
    const l = nums.length
    let n = 0;
    for (let k in numsMap) {
        if (numsMap[k] != 1) {
            return true
        } else {
            n++
        }
    }
    if (n === l) {
        return false
    }
};


// 测试用例
let test = [1, 2, 3, 4]

console.time('执行用时');
console.log(containsDuplicate(test));
console.timeEnd('执行用时');