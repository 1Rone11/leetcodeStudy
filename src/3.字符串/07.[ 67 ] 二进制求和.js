/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @LastEditTime: 2023-02-22 13:02:33
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\3.字符串\07.[ 67 ] 二进制求和.js
 * @Description: 
 */
/**
 * * 题目名称：二进制求和
 * * 题目地址：https://leetcode-cn.com/problems/add-binary
 *   给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。
 *  输入:a = "11", b = "1"
    输出："100"

    输入：a = "1010", b = "1011"
    输出："10101
 */

// * 思路：先对齐末尾，
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
   // let ans = "";
   // let ca = 0;
   // for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
   //    let sum = ca; // 记录进位
   //    sum += i >= 0 ? parseInt(a[i]) : 0;
   //    sum += j >= 0 ? parseInt(b[j]) : 0;
   //    ans += sum % 2;
   //    ca = Math.floor(sum / 2); // 进位
   // }
   // ans += ca == 1 ? ca : "";
   // return ans.split('').reverse().join('');

   let ans = ""; // 最后结果
   let ca = 0;
   for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
      let sum = ca;
      sum += i >= 0 ? parseInt(a[i]) : 0
      sum += j >= 0 ? parseInt(b[j]) : 0
      ans += sum % 2 // 先获得当前为的值
      ca = Math.floor(sum / 2) // 在获得进位值
   }
   ans += ca == 1 ? ca : ''
   return ans.split('').reverse().join('')
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(addBinary('11', '1'));
console.timeEnd('执行用时');