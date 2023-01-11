/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:03
 * @LastEditTime: 2023-01-11 08:36:12
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\1.栈\05.[ 1047 ] 删除字符串中的所有相邻重复项.js
 * @Description: 
 */
/**
 * * 题目名称：删除字符串中的所有相邻重复项
 * * 题目地址：https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string
 */
/**
 * 输入："abbaca"
    输出："ca"
    解释：
    例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，
    其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
 */
// * 思路：
/**
 * 遍历每个字符串，变量charPrev记录下前一个的值，
 * 与当下的值比较是否相等，相等则把两个字符都删去再重组字符串，递归再次调用
 * 
 * 每次出栈都进行一次判断
    如果遇到str[str.length-1]===strStack.pop
    先将pop的加入到str中，
    然后截取str的最后两个字符，返回成为新的字符串
 */

/**
 * @param {string} s
 * @return {string}
 */
// let isDuplicates = false
// const removeDuplicates = function (s) {
//     const reverseStack = []
//     const rightStack = []
//     for (key in s) {
//         reverseStack.push(s[key])
//     }
//     verify(reverseStack,rightStack)
// };
// const verify = function (reverseStack, rightStack) {
//     while (reverseStack.length) {
//         if (rightStack.length) {
//             if (rightStack[rightStack.length - 1] === reverseStack[reverseStack.length - 1]) {
//                 isDuplicates = true
//                 rightStack.pop()
//                 reverseStack.pop()
//             }
//         }
//         rightStack.push(reverseStack.pop)
//     }
//     if(!reverseStack.length){
//         let temp = rightStack
//         rightStack = reverseStack
//         reverseStack = temp
//         verify(reverseStack,rightStack)
//     }
// }
// 测试用例
const removeDuplicates = function (s) {
    // debugger
    let removeStack = []
    for (const char of s) {
        if (removeStack.length && removeStack[removeStack.length - 1] == char) {
            removeStack.pop()
        }else{
            removeStack.push(char)
        }
    }
    return removeStack.join('')
}

let test = 'abbaca'

console.time('执行用时');
console.log(removeDuplicates(test));
console.timeEnd('执行用时');