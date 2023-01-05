/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:03
 * @LastEditTime: 2023-01-04 08:48:18
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\1.栈\01.[ 1021 ] 删除最外层的括号.js
 * @Description: 
 */
/**
 * * 题目名称：删除最外层的括号
 * * 题目地址：https://leetcode-cn.com/problems/remove-outermost-parentheses
 */

// * 思路：从头到尾寻找有效括号组合，push 到结果集中
const removeOuterParentheses = (s) => {
    debugger
    let res = '';
    const stack = [];
    for (let i = 0; i <= s.length; i++) {
        const c = s[i];
        if (c === ')') stack.pop();
        if (stack.length) res += c
        if (c === '(') stack.push();
    }
    return res
}

// 测试用例
let test = "(()())(())"

console.time('执行用时');
console.log(removeOuterParentheses(test));
console.timeEnd('执行用时');