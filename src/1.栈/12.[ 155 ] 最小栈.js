/**
 * * 题目名称：最小栈
 * * 题目地址：https://leetcode-cn.com/problems/min-stack
 */

/**
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
    实现 MinStack 类:
    MinStack() 初始化堆栈对象。
    void push(int val) 将元素val推入堆栈。
    void pop() 删除堆栈顶部的元素。
    int top() 获取堆栈顶部的元素。
    int getMin() 获取堆栈中的最小元素。
 */
// * 思路：定义两个栈，一个普通栈，一个最小栈，栈顶始终存放的是普通栈中的最小值
var MinStack = function () {
    this.stack = [];
    this.minStack = [Infinity]
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push(val)
    this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], val))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop();
    this.minStack.pop();
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
MinStack()
MinStack.prototype.push(-2)
MinStack.prototype.push(0)
MinStack.prototype.push(3)
MinStack.prototype.getMin();
MinStack.prototype.pop();
MinStack.prototype.top();
MinStack.prototype.getMin();

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');