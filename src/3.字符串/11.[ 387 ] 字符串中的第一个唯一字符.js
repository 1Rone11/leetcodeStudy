/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @LastEditTime: 2023-02-28 08:43:10
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\3.字符串\11.[ 387 ] 字符串中的第一个唯一字符.js
 * @Description: 
 */
/**
 * * 题目名称：字符串中的第一个唯一字符
 * * 题目地址：https://leetcode-cn.com/problems/first-unique-character-in-a-string
 *  输入: s = "leetcode"
    输出: 0

    输入: s = "loveleetcode"
    输出: 2

    输入: s = "aabb"
    输出: -1
    在第一次遍历时，我们使用哈希映射统计出字符串中每个字符出现的次数。在第二次遍历时，
    我们只要遍历到了一个只出现一次的字符，那么就返回它的索引，否则在遍历结束后返回 
−
1
−1。

    
 */

// * 思路：
import _ from 'lodash'
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const frequency = _.countBy(s);
    for (const [i, ch] of Array.from(s).entries()) {
        console.log([i, ch]);
        if (frequency[ch] === 1) {
            return i;
        }
    }
    return -1;
};


// 测试用例
let test = 'loveleetcode'

console.time('执行用时');
console.log(firstUniqChar(test));
console.timeEnd('执行用时');