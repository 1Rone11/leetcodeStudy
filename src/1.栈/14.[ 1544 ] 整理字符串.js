/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:03
 * @LastEditTime: 2023-02-06 21:48:42
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\1.栈\14.[ 1544 ] 整理字符串.js
 * @Description: 
 */
/**
 * * 题目名称：整理字符串
 * * 题目地址：https://leetcode-cn.com/problems/make-the-string-great
 * 一个整理好的字符串中，两个相邻字符 s[i] 和 s[i+1]，其中 0<= i <= s.length-2 ，要满足如下条件:
    若 s[i] 是小写字符，则 s[i+1] 不可以是相同的大写字符。
    若 s[i] 是大写字符，则 s[i+1] 不可以是相同的小写字符。
 */

// * 思路：定义一个栈，迭代实现该功能


/**
 * @param {string} s
 * @return {string}
 */
let makeGood = function (s) {
    let res = []
    for (let i of s) {
        if (res.length && res[res.length - 1] != i && res[res.length - 1].toUpperCase() === i.toUpperCase()) {
            res.pop()
        } else {
            res.push(i)
        }
    }
    return res.join('')
}
// 测试用例
let test = 'leEeetcode'
let test2 = 'abBAcC'
let test3 = 's'
console.time('执行用时');
console.log(makeGood(test));;
console.log(makeGood(test2));;
console.log(makeGood(test3));;
console.timeEnd('执行用时');