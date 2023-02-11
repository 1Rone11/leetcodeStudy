/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @LastEditTime: 2023-02-09 12:45:12
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\2.队列\01.[ 933 ] 最近的请求次数.js
 * @Description: 
 */
/**
 * * 题目名称：最近的请求次数
 * * 题目地址：https://leetcode-cn.com/problems/number-of-recent-calls
 * 输入：
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]
输出：
[null, 1, 2, 3, 3]
返回[t-3000,t]的请求次数
 */

// * 思路：
var RecentCounter = function () {
    this.pingStack = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    this.pingStack.push(t)
    while (this.pingStack[0] < t - 3000) {
        this.pingStack.shift()
    }
    return this.pingStack.length
};
// 测试用例
let test = ''
console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');