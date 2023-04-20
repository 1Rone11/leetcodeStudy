/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @LastEditTime: 2023-04-20 08:48:44
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\4.数组\23.[ 1122 ] 数组的相对排序.js
 * @Description: 
 */
/**
 * * 题目名称：数组的相对排序
 * * 题目地址：https://leetcode-cn.com/problems/relative-sort-array
 * 给你两个数组，arr1 和 arr2，arr2 中的元素各不相同，arr2 中的每个元素都出现在 arr1 中。
    对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。
    示例 1：
    输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
    输出：[2,2,2,1,4,3,3,9,6,7,19]
    示例  2:
    输入：arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
    输出：[22,28,8,6,17,44]
    提示：
    1 <= arr1.length, arr2.length <= 1000
    0 <= arr1[i], arr2[i] <= 1000
    arr2 中的元素 arr2[i]  各不相同 
    arr2 中的每个元素 arr2[i] 都出现在 arr1 中
 */

// * 思路：
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let res = []
    for (let k in arr2) {
        while (arr1.indexOf(arr2[k]) != -1) {
            let i = arr1.indexOf(arr2[k]);
            res.push(arr1[i])
            arr1.splice(i, 1)
        }
    }
    const sortArr1 = arr1.sort((a, b) => a - b)
    res.push(...sortArr1)
    return res
};

const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19]
const arr2 = [2, 1, 4, 3, 9, 6]
const arr11 = [28, 6, 22, 8, 44, 17];
const arr22 = [22, 28, 8, 6]
console.time('执行用时');
console.log(relativeSortArray(arr11, arr22));
console.timeEnd('执行用时');