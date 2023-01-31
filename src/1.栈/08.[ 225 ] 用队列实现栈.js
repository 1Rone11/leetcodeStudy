/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:03
 * @LastEditTime: 2023-01-16 08:26:02
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\1.栈\08.[ 225 ] 用队列实现栈.js
 * @Description: 
 */
/**
 * * 题目名称：用队列实现栈
 * * 题目地址：https://leetcode-cn.com/problems/implement-stack-using-queues
 * 
 * 如何使用两个队列实现栈
 * 队列：先进先出
 * 栈：后进先出
 * 利用数组实现
 */

// * 思路：
/**
 * 进栈： 
 */
var MyStack = function () {
    let inQueue = [];
    let outQueue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    inQueue.push(x)
    
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {

};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {

};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {

};


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');