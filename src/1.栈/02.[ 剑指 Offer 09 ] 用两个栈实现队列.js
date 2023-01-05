/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:03
 * @LastEditTime: 2023-01-05 12:41:16
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\1.栈\02.[ 剑指 Offer 09 ] 用两个栈实现队列.js
 * @Description: 
 */
/**
 * * 题目名称：用两个栈实现队列
 * * 题目地址：https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof
 * 
 * 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，
 * 分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
 */

// * 思路：见drawio

var CQueue = function () {
    this.inStack = [];
    this.inStack = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    this.inStack.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    if (!this.outStack.length) {
        if (!this.inStack.length) {
            return -1
        }
        this.in2out()
    }
    return this.outStack.pop()
};

CQueue.prototype.in2out = function () {
    while (this.inStack.length) {
        this.outStack.push(this.inStack.pop());
    }
}

// 测试用例

let test = ''

console.time('执行用时');
debugger
CQueue()
CQueue.prototype.deleteHead()
CQueue.prototype.deleteHead()
CQueue.prototype.deleteHead()
console.timeEnd('执行用时');