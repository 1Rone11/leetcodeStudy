/**
 * * 题目名称：有效的山脉数组
 * * 题目地址：https://leetcode-cn.com/problems/valid-mountain-array
 * 给定一个整数数组 arr，如果它是有效的山脉数组就返回 true，否则返回 false。
  让我们回顾一下，如果 arr 满足下述条件，那么它是一个山脉数组：
  arr.length >= 3
  在 0 < i < arr.length - 1 条件下，存在 i 使得：
  arr[0] < arr[1] < ... arr[i-1] < arr[i]
  arr[i] > arr[i+1] > ... > arr[arr.length - 1]
   * 示例 1：
  输入：arr = [2,1]
  输出：false
  示例 2：
  输入：arr = [3,5,5]
  输出：false
  示例 3：
  输入：arr = [0,3,2,1]
  输出：true
 */

// * 思路：
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  const max = Math.max(...arr)
  const maxIndex = arr.indexOf(max)
  if(maxIndex===0||maxIndex===arr.length-1) {return false}else{
    for(let i = 1;i< maxIndex;i++){
      if(arr[i]>arr[i-1]){
        continue
      }else{
        return false
      }
    }
    for(let j =arr.length-1;j>maxIndex;j--){
      if(arr[j]<arr[j-1]){
        continue
      }else{
        return false
      }
    }
    return true
  }
  
};


// 测试用例
let test = [0,3,2,1]
let test2 = [3,4,5]

console.time('执行用时');
console.log(validMountainArray(test));
console.log(validMountainArray(test2));
console.timeEnd('执行用时');