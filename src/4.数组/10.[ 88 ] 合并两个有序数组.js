/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @LastEditTime: 2023-03-19 10:16:09
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\4.数组\10.[ 88 ] 合并两个有序数组.js
 * @Description: 
 */
/**
 * * 题目名称：合并两个有序数组
 * * 题目地址：https://leetcode-cn.com/problems/merge-sorted-array
 */

// * 思路：利用双指针，分别遍历排序两个数组
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let pa = 0;
    let pb = 0;
    let newArr = new Array(m + n).fill(0)
    let cur;
    while (pa < m || pb < n) {
        if (pa === m) { // 第一个数组到头
            cur = nums2[pb++]
        } else if (pb === n) { // 第二个数组到头
            cur = nums1[pa++]
        } else if (nums1[pa] < nums2[pb]) { // 没到头比大小
            cur = nums1[pa++]
        } else {
            cur = nums2[pb++]
        }
        newArr[pa + pb - 1] = cur
    };

    for (let i = 0; i < m + n; i++) {
        nums1[i] = newArr[i]
    }
    return nums1
}

//ES6简易方法
const merge2 = function (nums1, m, nums2, n) {
    nums1.splice(m, nums1.length - m, ...nums2) // 删除后面的占位0，再将nums2数组放入到nums1中
    nums1.sort((nums1, nums2) => {
        return nums1 - nums2
    })
    console.log("🚀 ~ file: 10.[ 88 ] 合并两个有序数组.js:32 ~ nums1.sort ~ nums1:", nums1)
}

// 测试用例
let nums1 = [1, 2, 3, 0, 0, 0]
let nums2 = [2, 5, 6]

console.time('执行用时');
console.log(merge(nums1, 3, nums2, 3));
// merge2(nums1, 3, nums2, 3);
console.timeEnd('执行用时');