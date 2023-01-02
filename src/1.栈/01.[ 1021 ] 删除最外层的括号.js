/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:03
 * @LastEditTime: 2023-01-02 15:58:08
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\1.栈\01.[ 1021 ] 删除最外层的括号.js
 * @Description: 
 */
/**
 * * 题目名称：删除最外层的括号
 * * 题目地址：https://leetcode-cn.com/problems/remove-outermost-parentheses
 */

// * 思路：从头到尾寻找有效括号组合，push 到结果集中


// 测试用例
let test = "(()())(())"

console.time('执行用时');
console.log(removeOuterParentheses(test));
console.timeEnd('执行用时');