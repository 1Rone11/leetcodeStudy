/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:03
 * @LastEditTime: 2023-01-31 08:48:10
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\1.栈\11.[ 面试题 03.02 ] 栈的最小值.js
 * @Description: 
 */
/**
 * * 题目名称：栈的最小值
 * * 题目地址：https://leetcode-cn.com/problems/min-stack-lcci
 */

// * 思路：
/**
 * 定义两个栈 一个普通栈，一个存放最小值的栈，
 * 最小值的栈栈顶始终存放该栈中的最小值
 * 这样不用每次遍历普通栈来寻找最小值
 */

var MinStack = function () {
    this.Stack = [];
    this.minStack = [Infinity]
    /**
     * "Infinity" 是 JavaScript 中的一个特殊值，代表正无穷。在这种情况下，初始化数组中只有一个元素，
     * 其值为正无穷，可能是为了在某些操作中使用它作为初始值。
     */
}

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.Stack.push(x)
    this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], x))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop();
    this.minStack.pop()
};
/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1]
};

// 测试用例
let test = ''


console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');