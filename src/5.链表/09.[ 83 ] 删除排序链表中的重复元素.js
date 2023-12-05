/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @FilePath: \leetcodeStudy\src\5.链表\09.[ 83 ] 删除排序链表中的重复元素.js
 * @Description: 
 */
/**
 * * 题目名称：删除排序链表中的重复元素
 * * 题目地址：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list
 * 给定一个已排序的链表的头 head ， 
 * 删除所有重复的元素，使每个元素只出现一次,返回已排序的链表。
 */

// * 思路：
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function createListNode(arr) {
    let head = new ListNode(arr[0]);
    let cur = head;
    for (let i = 1; i < arr.length; i++) {
        cur.next = new ListNode(arr[i]);
        cur = cur.next;
    }
    return head;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (head === null) return null
    let cur = head
    while (cur.next) {
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return head
};


// 测试用例
let test = createListNode([1, 1, 2]);

console.time('执行用时');
console.log(deleteDuplicates(test));
console.timeEnd('执行用时');