/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @LastEditTime: 2023-03-03 12:46:56
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\3.字符串\12.[ 面试题 01.02 ] 判定是否互为字符重排.js
 * @Description: 
 */
/**
 * * 题目名称：判定是否互为字符重排
 * * 题目地址：https://leetcode-cn.com/problems/check-permutation-lcci
 *  给定两个由小写字母组成的字符串 s1 和 s2，请编写一个程序，
 *  确定其中一个字符串的字符重新排列后，能否变成另一个字符串。
 * 
 *  输入: s1 = "abc", s2 = "bca"
    输出: true 

    输入: s1 = "abc", s2 = "bad"
    输出: false
 */

// * 思路：直接判断两个字符串的各个字符的个数，全部一样，说明能够重组
import _ from 'lodash'
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const CheckPermutation = function (s1, s2) {
    if (s1.length !== s2.length) return false
    const frequency1 = _.countBy(s1);
    const frequency2 = _.countBy(s2);

    for (const [i, ch] of Array.from(s1).entries()) {
        if (frequency1[ch] === frequency2[ch]) {
            if (i === s1.length - 1) {
                return true
            }
            continue
        }
        return false
    }
};


// 测试用例
let test = ['abc', 'aba']
let test2 = ['abc', 'bad']

console.time('执行用时');
// console.log(CheckPermutation(test[0], test[1]));
console.log(CheckPermutation(test2[0], test2[1]));
console.timeEnd('执行用时');