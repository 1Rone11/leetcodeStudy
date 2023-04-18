/**
 * * 题目名称：使用最小花费爬楼梯
 * * 题目地址：https://leetcode-cn.com/problems/min-cost-climbing-stairs
 * 给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。

  你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。
  请你计算并返回达到楼梯顶部的最低花费。
  示例 1：
  输入：cost = [10,15,20]
  输出：15
  解释：你将从下标为 1 的台阶开始。
  - 支付 15 ，向上爬两个台阶，到达楼梯顶部。
  总花费为 15 。
  示例 2：
  输入：cost = [1,100,1,1,1,100,1,1,100,1]
  输出：6
  解释：你将从下标为 0 的台阶开始。
  - 支付 1 ，向上爬两个台阶，到达下标为 2 的台阶。
  - 支付 1 ，向上爬两个台阶，到达下标为 4 的台阶。
  - 支付 1 ，向上爬两个台阶，到达下标为 6 的台阶。
  - 支付 1 ，向上爬一个台阶，到达下标为 7 的台阶。
  - 支付 1 ，向上爬两个台阶，到达下标为 9 的台阶。
  - 支付 1 ，向上爬一个台阶，到达楼梯顶部。
  总花费为 6 。
 */

// * 思路：动态规划问题，除了第一第二个台阶，其他的每一个台阶都可以设想为dp[i] = min(dp[i-1],dp[i-2]) + cost[i]
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const n  = cost.length
  let dp = new Array(n).fill(0)
  dp[0] = cost[0]
  dp[1] = cost[1]
  for(let i = 2;i<n;i++){
    dp[i] = Math.min(dp[i-1],dp[i-2])+cost[i]
  }
  return Math.min(dp[n-2],dp[n-1])
};


// 测试用例
let test = [1,100,1,1,1,100,1,1,100,1]

console.time('执行用时');
console.log(minCostClimbingStairs(test));
console.timeEnd('执行用时');