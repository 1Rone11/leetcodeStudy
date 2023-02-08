/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:03
 * @LastEditTime: 2023-02-08 12:51:03
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\1.栈\16.[ 20 ] 有效的括号.js
 * @Description: 
 */
/**
 * * 题目名称：有效的括号
 * * 题目地址：https://leetcode-cn.com/problems/valid-parentheses
 * 
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
    有效字符串需满足：
    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。
    每个右括号都有一个对应的相同类型的左括号。
 */

// * 思路：遍历测试用例，遇到左括号-->进栈,
//   遇到右括号（进行判断是否和栈顶的左括号相同）-->将左括号出栈


/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    let inStack = []
    let testStack = s.split('')
    testStack.forEach((item) => {
        if ((item === ')' || item === ']' || item === '}') && inStack.length === 0) {
            inStack.push(item)
        } else if (item === '(' || item === '[' || item === '{') {
            inStack.push(item)
        } else if (item === ')' || item === ']' || item === '}') {
            if (item === ')' && inStack[inStack.length - 1] === '(' && inStack.length) {
                inStack.pop()
            } else if (item === ']' && inStack[inStack.length - 1] === '[' && inStack.length) {
                inStack.pop()
            } else if (item === '}' && inStack[inStack.length - 1] === '{' && inStack.length) {
                inStack.pop()
            }else{
                inStack.push(item)
            }
        } else {
            inStack.push(item)
        }
    })

    if (!inStack.length) {
        return true
    } else {
        return false
    }
};
// 测试用例
let test = '()[]{}'
let test2 = '(]{}'
let test3 = ']'
let test4 = "(])"
let test5 = "()"
console.time('执行用时');
console.log(isValid(test4));
console.timeEnd('执行用时');