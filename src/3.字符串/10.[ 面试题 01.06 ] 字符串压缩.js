/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @LastEditTime: 2023-02-24 22:59:47
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\3.字符串\10.[ 面试题 01.06 ] 字符串压缩.js
 * @Description: 
 */
/**
 * * 题目名称：字符串压缩
 * * 题目地址：https://leetcode-cn.com/problems/compress-string-lcci
    字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。
    比如，字符串aabcccccaaa会变为a2b1c5a3。若“压缩”后的字符串没有变短，则返回原先的字符串。
    你可以假设字符串中只包含大小写英文字母（a至z）。

示例1:

 输入："aabcccccaaa"
 输出："a2b1c5a3"
示例2:

 输入："abbccd"
 输出："abbccd"
 解释："abbccd"压缩后为"a1b2c2d1"，比原字符串长度更长。
*/

// * 思路：遍历字符串，相等该字母数量charNum加1，
//  不相等记录记录下charNum数值和该字母char，生成char+charNum。

/**
 * @param {string} S
 * @return {string}
 * 'aabcccccaa'
 */
var compressString = function (S) {
    let charArr = [];
    let str = '';
    for (const c in S) {
        if (!charArr.length) {
            charArr.push(S[c])
            if (parseInt(c) === (S.length - 1)) {
                const charNum = charArr.length;
                const char = S[c - 1]
                str += `${char}${charNum}`
            }
        } else if (S[c - 1] === S[c]) {
            charArr.push(S[c])
            if (parseInt(c) === (S.length - 1)) {
                const charNum = charArr.length;
                const char = S[c - 1]
                str += `${char}${charNum}`
            }
        } else {
            const charNum = charArr.length;
            const char = S[c - 1]
            str += `${char}${charNum}`
            charArr = []
            charArr.push(S[c])
            if (parseInt(c) === (S.length - 1)) {
                const charNum = charArr.length;
                const char = charArr[charArr.length - 1]
                str += `${char}${charNum}`
            }
        }
    }
    if (str.length < S.length) {
        return str
    } else {
        return S
    }
};


// 测试用例
let test = "aabcccccaa"
let test2 = 'abbccd'
let test3 = 'a'
let test4 = "bbbac"
let test5 = "IIIIeeeeOODDDssppppooQQQQppplllhU"

console.time('执行用时');
// console.log(compressString(test));
// console.log(compressString(test2));
// console.log(compressString(test3));
console.log(compressString(test5));
console.timeEnd('执行用时');