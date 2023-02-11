/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @LastEditTime: 2023-02-11 16:26:15
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\2.队列\02.[ 剑指 Offer 59 - I ] 滑动窗口的最大值.js
 * @Description:  
 */
/**
 * * 题目名称：滑动窗口的最大值
 * * 题目地址：https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof
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

// * 思路：只需要维护一个随窗口移动的单调队列
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const res = []; // 答案序列
    const dque = []; // 单调队列
    const n = nums.length;
    let l = 0, r = 0; // 滑动窗口的边界
    while (r < n) {
        // 维护滑动窗口的边界
        while (dque.length !== 0 && dque[dque.length - 1] < nums[r]) {
            dque.pop();
        }
        dque.push(nums[r++]);
        //等到右边界限大于限制数开始每次做判断
        if (r >= k) {
            res.push(dque[0]);
            if (dque[0] === nums[l]) dque.shift(); //如果单调队列等于左边界，说明重复了
            l++;
        }
    }
    return res;
};


// 测试用例
let test = [1, 3, -1, -3, 5, 3, 6, 7]

console.time('执行用时');
console.log(maxSlidingWindow(test, 3));
console.timeEnd('执行用时');