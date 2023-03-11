/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @LastEditTime: 2023-03-11 15:34:22
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\4.数组\05.[ 面试题 10.01 ] 合并排序的数组.js
 * @Description: 
 */
/**
 * * 题目名称：合并排序的数组
 * * 题目地址：https://leetcode-cn.com/problems/sorted-merge-lcci
 * 给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。

初始化 A 和 B 的元素数量分别为 m 和 n。

示例:

输入:
A = [1,2,3,0,0,0], m = 3
B = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
 */

// * 方法1：根据已排序的性质，使用双指针，指向两个数组，依次遍历取最小
/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function (A, m, B, n) {
    let pa = 0;
    let pb = 0;
    const sorted = new Array(m + n).fill(0)
    let cur;
    while (pa < m || pb < n) {
        if (pa === m) {
            cur = B[pb++]
        } else if (pb === n) {
            cur = A[pa++]
        } else if (A[pa] < B[pb]) {
            cur = A[pa++]
        } else {
            cur = B[pb++]
        }
        sorted[pa + pb - 1] = cur
    }
    for (let i = 0; i != m + n; ++i) {
        A[i] = sorted[i]
    }
};

//方法2：先将两个数组合并，再排序
const merge1 = (A, m, B, n) => {
    A.splice(m, A.length - m, ...B)
    A.sort((a, b) => a - b)
    console.log(A);
}

// 测试用例
const A = [1, 2, 3, 0, 0, 0]
const B = [2, 5, 6]

console.time('执行用时');
console.log(merge(A, 3, B, 3));
// console.log(merge1(A, 3, B, 3));
console.timeEnd('执行用时');