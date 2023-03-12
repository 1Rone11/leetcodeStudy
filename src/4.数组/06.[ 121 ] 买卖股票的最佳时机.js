/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @LastEditTime: 2023-03-12 14:49:36
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\4.数组\06.[ 121 ] 买卖股票的最佳时机.js
 * @Description: 
 */
/**
 * * 题目名称：买卖股票的最佳时机
 * * 题目地址：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock
 *  给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
    你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
    返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
    示例 1：
    输入：[7,1,5,3,6,4]
    输出：5
    解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
         注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
    示例 2：
    输入：prices = [7,6,4,3,1]
    输出：0
    解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
 */

// * 思路：寻找递增数列

/**
 * @param {number[]} prices
 * @return {number}
 */

// 方法1:暴力求解（会超时，效率太低）
var maxProfit = function (prices) {
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i; j < prices.length; j++) {
            if (max < prices[j] - prices[i]) {
                max = prices[j] - prices[i]
            }
        }
    }
    return max
};

//方法2:动态规划
const maxProfit2 = (prices) => {
    let min_price = Math.max(...prices)
    let max_profit = 0;
    for (const p of prices) {
        if (p < min_price) {
            min_price = p
        } else if (p - min_price > max_profit) {
            max_profit = p - min_price
        }
    }
    return max_profit
}

// 测试用例
let test = [7, 1, 5, 3, 6, 4]
let test2 = [7, 6, 4, 3, 1]
console.time('执行用时');
// console.log(maxProfit(test));
console.log(maxProfit2(test));
console.timeEnd('执行用时');