/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @LastEditTime: 2023-02-16 12:47:24
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\3.字符串\06.[ 125 ] 验证回文串.js
 * @Description: 
 */
/**
 * * 题目名称：验证回文串
 * * 题目地址：https://leetcode-cn.com/problems/valid-palindrome
 * 
 * 如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。
    字母和数字都属于字母数字字符。
    给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。

    输入: s = "A man, a plan, a canal: Panama"
    输出：true
    解释："amanaplanacanalpanama" 是回文串。
 */

/**
 *  思路：
 *  1.将所有大写字符转换为小写字符
 *  2.去除所有非字母数字字符
 *  3.验证回文数
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    //1.替换所有非数字英文字符（正则表达式）
    const filterStr = s.split('').filter((item => {
        return /^[a-zA-Z0-9]+$/.exec(item)
    }))
    const str = filterStr.join("").toLowerCase()
    //2.reverse反转看值是否相等
    const reverseStr = [...str].reverse().join("")

    if (str === reverseStr) {
        return true
    } else {
        return false
    }
};
// 测试用例
let test = 'A man, a plan, a canal:312 Panama'

console.time('执行用时');
console.log(isPalindrome(test));
console.timeEnd('执行用时');