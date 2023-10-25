/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @FilePath: \leetcodeStudy\src\5.链表\06.[ 876 ] 链表的中间结点.js
 * @Description: 
 */
/**
 * * 题目名称：链表的中间结点
 * * 题目地址：https://leetcode-cn.com/problems/middle-of-the-linked-list
 * 给你单链表的头结点 head ，请你找出并返回链表的中间结点。
如果有两个中间结点，则返回第二个中间结点。
示例 1：
输入：head = [1,2,3,4,5]
输出：[3,4,5]
解释：链表只有一个中间结点，值为 3 。
示例 2：
输入：head = [1,2,3,4,5,6]
输出：[4,5,6]
解释：该链表有两个中间结点，值分别为 3 和 4 ，返回第二个结点。
 */

// * 思路：
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function createListNode(arr) {
    if (arr.length === 0) return null
    let head = new ListNode(arr[0])
    let cur = head
    for (let i = 1; i < arr.length; i++) {
        cur.next = new ListNode(arr[i])
        cur = cur.next
    }
    return head
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let a = [head]
    while (a[a.length - 1].next !== null) {
        a.push(a[a.length - 1].next)
    }
    return a[Math.trunc(a.length / 2)]
    // if (head === null) return []
    // let arr = []
    // while (head) {
    //     arr.push(head.val)
    //     head = head.next
    // }
    // return arr.slice(arr.length / 2)
};


// 测试用例
let test = createListNode([1, 2, 3, 4, 5])
let test2 = createListNode([1, 2, 3, 4, 5, 6])
let res = middleNode(test)
console.time('执行用时');
console.log(middleNode(test));
// console.log(middleNode(test2));
console.timeEnd('执行用时');