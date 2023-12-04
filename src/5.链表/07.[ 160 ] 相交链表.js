/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @FilePath: \leetcodeStudy\src\5.链表\07.[ 160 ] 相交链表.js
 * @Description: 
 */
/**
 * * 题目名称：相交链表
 * * 题目地址：https://leetcode-cn.com/problems/intersection-of-two-linked-lists
 * 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。
    图示两个链表在节点 c1 开始相交：
    题目数据 保证 整个链式结构中不存在环。
    注意，函数返回结果后，链表必须 保持其原始结构 。
 */

// * 思路：

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
function createListNode(arr) {
    if (arr.length == 0) return null
    let head = new ListNode(arr[0])
    let cur = head
    for (let i = 1; i < arr.length; i++) {
        cur.next = new ListNode(arr[i])
        cur = cur.next
    }
    return head
}


/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    const visited = new Set();
    let temp = headA;
    while (temp !== null) {
        visited.add(temp);
        temp = temp.next;
    }
    temp = headB;
    while (temp !== null) {
        if (visited.has(temp)) return temp
        temp = temp.next
    }
    return null
};
// 测试用例 
const listA = [4, 1, 8, 4, 5]
const listB = [5, 6, 1, 8, 4, 5]
const headA = createListNode(listA)
const headB = createListNode(listB)
console.time('执行用时');
console.log(getIntersectionNode(headA, headB));
console.timeEnd('执行用时');