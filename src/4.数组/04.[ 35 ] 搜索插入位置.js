/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @LastEditTime: 2023-03-11 14:57:57
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\4.数组\04.[ 35 ] 搜索插入位置.js
 * @Description: 
 */
/**
 * * 题目名称：搜索插入位置
 * * 题目地址：https://leetcode-cn.com/problems/search-insert-position
 *   给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 */

// * 思路：该程序目的使找到第一个大于等于target的数组下标
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    const len = nums.length
    //特殊情况
    if (nums[len - 1] < target) return len

    //到这里nums[len-1]一定有大于等于target的值
    let left = 0;
    let right = len - 1
    while (left < right) {
        const mid = left + parseInt((right - left) / 2) // 避免数值过大溢出
        if (nums[mid] < target) {
            left = mid + 1 // 范围是[mid + 1,right]
        } else {
            right = mid // 范围是[left,mid]
        }
    }
    return left
};


// 测试用例
let test = [1, 3, 5, 6]

console.time('执行用时');
console.log(searchInsert(test, 5));
console.timeEnd('执行用时');