/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @LastEditTime: 2023-02-23 12:47:16
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\3.字符串\09.[ 剑指 Offer 58 - II ] 左旋转字符串.js
 * @Description: 
 */
/**
 * * 题目名称：左旋转字符串
 * * 题目地址：https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof
 *  输入: s = "abcdefg", k = 2
    输出: "cdefgab"

    输入: s = "lrloseumgh", k = 6
    输出: "umghlrlose"
 */

// * 思路：1.到哪里就遍历截取到哪里   2.直接用slice截取，在拼接到后面
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 * 方法1
 */
var reverseLeftWords = function (s, n) {
    //1.根据n定位到需要旋转的起始位置 n编号开始旋转
    //2.向左旋转-->变相理解左边的向右旋转就是将从0往n的字符串
    const sArr = s.split("");
    let tempArr = [];
    for (let i = 0; i < n; i++) {
        tempArr.push(sArr.shift(sArr[i]))
    }

    let length = tempArr.length
    for (let j = 0; j <= length; j++) {
        sArr.push(tempArr.shift(tempArr[j]))
    }

    return sArr.join('')
};

const reverseLeftWords2 = function (s, n) {

    const sArr = s.split('')
    const left = s.slice(0, n)
    for (let i = 0; i < n; i++) {
        sArr.shift()
    }
    const result = sArr.join('') + left
    return result
}

// 测试用例
let test = 'abcdefg'
let test2 = 'lrloseumgh'

console.time('执行用时');
console.log(reverseLeftWords2(test, 2));
console.log(reverseLeftWords(test2, 6));
console.timeEnd('执行用时');