/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @LastEditTime: 2023-04-11 08:26:59
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\4.数组\17.[ 1365 ] 有多少小于当前数字的数字.js
 * @Description: 
 */
/**
 * * 题目名称：有多少小于当前数字的数字
 * * 题目地址：https://leetcode-cn.com/problems/how-many-numbers-are-smaller-than-the-current-number
 * 给你一个数组 nums，对于其中每个元素 nums[i]，请你统计数组中比它小的所有数字的数目。
    换而言之，对于每个 nums[i] 你必须计算出有效的 j 的数量，其中 j 满足 j != i 且 nums[j] < nums[i] 。
    以数组形式返回答案。
    示例 1：
    输入：nums = [8,1,2,2,3]
    输出：[4,0,1,1,3]
    解释： 
    对于 nums[0]=8 存在四个比它小的数字：（1，2，2 和 3）。 
    对于 nums[1]=1 不存在比它小的数字。
    对于 nums[2]=2 存在一个比它小的数字：（1）。 
    对于 nums[3]=2 存在一个比它小的数字：（1）。 
    对于 nums[4]=3 存在三个比它小的数字：（1，2 和 2）。
    示例 2：
    输入：nums = [6,5,4,8]
    输出：[2,1,0,3]
    示例 3：
    输入：nums = [7,7,7,7]
    输出：[0,0,0,0]
 */
// * 思路：
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    let res = []
    for (let k in nums) {
        const compareItem = nums[k];
        let sNum = 0;
        for (let i in nums) {
            if (i === k) continue
            if (nums[i] < nums[k]) sNum++;
        }
        res.push(sNum)
    }
    return res;
};


// 测试用例
let test = [8, 1, 2, 2, 3]

console.time('执行用时');
console.log(smallerNumbersThanCurrent(test));
console.timeEnd('执行用时');