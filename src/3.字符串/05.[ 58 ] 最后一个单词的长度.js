/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @LastEditTime: 2023-02-15 22:38:02
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\3.字符串\05.[ 58 ] 最后一个单词的长度.js
 * @Description: 
 */
/**
 * * 题目名称：最后一个单词的长度
 * * 题目地址：https://leetcode-cn.com/problems/length-of-last-word
 */

// * 思路：考虑最后一个单词，就不要用空格划分，
//          那么就从后往前遍历找到第一个不是空格的字符，然后再开始找到一个是空格的位置，相减就是长度

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let end = s.length - 1
    while (end >= 0 && s[end] === ' ') {
        end--
    }
    if (end < 0) return 0

    let start = end;//从后往前遇到了第一个不是空格的字符，继续从后往前遍历，再找到start开始的第一个空格
    while (start >= 0 && s[start] != ' ') {
        start--
    }
    return end - start
};

// 测试用例
let test = "luffy is still joyboy"
let test2 = "   fly me   to   the moon  "
console.time('执行用时');
console.log(lengthOfLastWord(test));
console.log(lengthOfLastWord(test2));
console.timeEnd('执行用时');