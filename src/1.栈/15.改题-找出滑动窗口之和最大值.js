/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:03
 * @LastEditTime: 2023-02-07 22:53:27
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\1.栈\15.[ 剑指 Offer 59 - I ] 滑动窗口的最大值.js
 * @Description: 
 */
/**
 * * 题目名称：滑动窗口的最大值
 * * 题目地址：https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof
 * 
 * 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
    示例:
    输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
    输出: [3,3,5,5,6,7] 
    解释: 
    滑动窗口的位置                最大值
    ---------------               -----
    [1  3  -1] -3  5  3  6  7       3
     1 [3  -1  -3] 5  3  6  7       3
     1  3 [-1  -3  5] 3  6  7       5
     1  3  -1 [-3  5  3] 6  7       5
     1  3  -1  -3 [5  3  6] 7       6
     1  3  -1  -3  5 [3  6  7]      7
 */

// * 思路：
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
    let sumStack = [];
    nums.forEach((item, index) => {
        if (index <= nums.length - k) {
            let sum = 0;
            for (let i = 0; i < k; i++){
                sum += nums[index + i]
            }
            sumStack.push(sum)
        }
    })
    return Math.max(...sumStack)
};


// 测试用例
let test = [1, 3, -1, -3, 5, 3, 6, 7]
const res = maxSlidingWindow(test, 3)
console.time('执行用时');
console.log(maxSlidingWindow(test, 3));
console.timeEnd('执行用时');