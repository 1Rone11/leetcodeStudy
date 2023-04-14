/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @LastEditTime: 2023-03-27 08:32:30
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\4.数组\14.[ 面试题 01.01 ] 判定字符是否唯一.js
 * @Description: 
 */
/**
 * * 题目名称：判定字符是否唯一
 * * 题目地址：https://leetcode-cn.com/problems/is-unique-lcci
 * 实现一个算法，确定一个字符串 s 的所有字符是否全都不同。

    示例 1：
    输入: s = "leetcode"
    输出: false 

    示例 2：
    输入: s = "abc"
    输出: true
 */
import _ from 'lodash'
// * 思路：使用lodash的countBy，生成hashMap
/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
    const charMap = _.countBy(astr)
    for (let k in charMap) {
        if (charMap[k] > 1) return false
    }
    return true
};


// 测试用例
let test = 'leetcode'
let test2 = 'abcd'

console.time('执行用时');
console.log(isUnique(test));
console.log(isUnique(test2));
console.timeEnd('执行用时');