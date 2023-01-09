/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:03
 * @LastEditTime: 2023-01-09 08:46:18
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\1.栈\04.[ 面试题 03.04 ] 化栈为队.js
 * @Description: 
 */
/**
 * * 题目名称：化栈为队
 * * 题目地址：https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci
 */

// * 思路：
/**
 * 用两个栈实现，a栈为输入栈，b栈为输出栈，执行pop时如果输出栈b为空，
 * 那就把输入栈a所有元素出栈以此输入到输出栈b中
 */
/**
 * Initialize your data structure here.
 */
MyQueue = function () {
    this.inStack = []
    this.outStack = []
};
class MyQueue {
    inStack = []
    outStack = []
}

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.inStack.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (!this.outStack.length) {
        this.in2out()
    }
    return this.outStack.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (!this.outStack.length) {
        this.in2out();
    }
    return this.outStack[this.outStack.length - 1]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.outStack.length === 0 && this.inStack.length === 0
};

MyQueue.prototype.in2out = function () {
    while (this.inStack.length) {
        this.outStack.push(this.inStack.pop())
    }
}

// 测试用例
let test = ''

console.time('执行用时');
// console.log(xxx(test));
const queue = new MyQueue();
queue.push(1)
queue.push(2)
queue.peek()
queue.pop()
queue.empty()
console.timeEnd('执行用时');