/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @LastEditTime: 2023-02-11 20:37:35
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\3.字符串\01.[ 20 ] 有效的括号.js
 * @Description: 
 */
/**
 * * 题目名称：有效的括号
 * * 题目地址：https://leetcode-cn.com/problems/valid-parentheses
 */

// * 思路：
/**
 * 判断括号的有效性可以使用「栈」这一数据结构来解决。
 */
var isValid = function (s) {
    // 首先判断字符串长度是奇偶
    if (s.length % 2 === 1) {
        return false
    }

    const pairMap = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ])
    let stack = [];

    for (let ch of s) {
        if (pairMap.has(ch)) {
            // 如果遇到右括号判断是否能在栈顶元素找到匹配的
            if (!stack.length || stack[stack.length - 1] !== pairMap.get(ch)) {
                return false;
            }
            stack.pop();
        } else {
            //如果遇到左括号直接入栈
            stack.push(ch)
        }
    }
    return !stack.length
};


// 测试用例
let test = '()'
console.time('执行用时');
console.log(isValid(test));
console.timeEnd('执行用时');