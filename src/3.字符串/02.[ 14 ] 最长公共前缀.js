/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @LastEditTime: 2023-02-13 22:06:57
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\3.字符串\02.[ 14 ] 最长公共前缀.js
 * @Description: 
 */
/**
 * * 题目名称：最长公共前缀
 * * 题目地址：https://leetcode-cn.com/problems/longest-common-prefix
 * 
 * 编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"
示例 2：

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
 */

// * 思路： 1.横向比较（依次两两比较寻求最大"公因数"） 
//          2.纵向比较,按列排序，每列相等则继续，不相等则结束
/**
 * @param {string[]} strs
 * @return {string}
 */
//1.横向比较
var longestCommonPrefix = function (strs) {
    //如果长度为零或者输入值为空，直接然会false
    if (strs.length === 0 || strs === null) {
        return ""
    }
    const count = strs.length
    let res = strs[0]
    for (let i = 1; i < count; i++) {
        res = isCompare(res, strs[i])
        if (res.length === 0) {
            return ""
        }
    }
    return res
};


function isCompare(a, b) {
    let min = Math.min(a.length, b.length)
    let index = 0;
    while (index < min && a.charAt(index) === b.charAt(index)) {
        index++
    }
    return a.slice(0, index)
}

//2.横向比较

// 测试用例
let test = ["dog", "racecar", "car"]
let test2 = ["flower", "flow", "flight"]
console.time('执行用时');
// console.log(longestCommonPrefix(test));
console.log(longestCommonPrefix(test2));
// longestCommonPrefix(test2);
console.timeEnd('执行用时');