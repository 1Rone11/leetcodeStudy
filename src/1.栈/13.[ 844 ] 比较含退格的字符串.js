/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:03
 * @LastEditTime: 2023-02-03 13:06:20
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\1.栈\13.[ 844 ] 比较含退格的字符串.js
 * @Description: 
 */
/**
 * * 题目名称：比较含退格的字符串
 * * 题目地址：https://leetcode-cn.com/problems/backspace-string-compare
 */

/**
 *  给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。
    注意：如果对空文本输入退格字符，文本继续为空。

    输入：s = "ab#c", t = "ad#c"
    输出：true
    解释：s 和 t 都会变成 "ac"。
 */

// * 思路：

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
   const stackA = handleParamToStack(s)
   // console.log("🚀 ~ file: 13.[ 844 ] 比较含退格的字符串.js:34 ~ backspaceCompare ~ stackA", stackA)
   const stackB = handleParamToStack(t)
   // console.log("🚀 ~ file: 13.[ 844 ] 比较含退格的字符串.js:36 ~ backspaceCompare ~ stackB", stackB)
   if(stackA.toString()===stackB.toString()){
      return true
   }else{
      return falses
   }
};
/**
 * 判断两个数组是否相等
 */
// function isSame(a, b) {
//    if(a.toString()===b.toString()){
//       return true
//    }else{
//       return falses
//    }
// }
/**
 * 
 * @param {} params 
 * @returns 
 * 将字符串转成对应栈
 */
const handleParamToStack = (params) => {
   let stack = []
   for (let item of params) {
      if (item != '#') {
         stack.push(item)
      } else if (item === '#') {
         if (stack.length === 0) {
            stack = []
         }
         stack.pop()
      }
   }
   return stack
}
// 测试用例
let testA = 'ab#c'
let testB = 'ad#c'
console.time('执行用时');
backspaceCompare(testA, testB)
console.timeEnd('执行用时');