/**
 * * 题目名称：回文链表
 * * 题目地址：https://leetcode-cn.com/problems/palindrome-linked-list
 */

// * 思路：
//链表定义
function ListNode(val) {
    this.val = val;
    this.next = null
}

//创建链表
function createLinkedList(arr) {
    if (arr.length === 0) return null
    let head = new ListNode(arr[0])
    let cur = head
    for (let i = 1; i < arr.length; i++) {
        cur.next = new ListNode(arr[i])
        cur = cur.next
    }
    return head
}

const testArr = createLinkedList([1, 2, 2, 1])

// 回文链表
const palindrome = (head) => {
    // 1.遍历链表，获取链表对应数组
    const vals = [];
    while (head !== null) {
        vals.push(head.val)
        head = head.next
    }

    // 2.头尾指针判断回文
    for (let i = 0, j = vals.length - 1; i < j; i++, j--) {
        if (vals[i] !== vals[j]) {
            return false
        }
    }
    return true
}
// 测试用例
let test = ''

console.time('执行用时');
console.log(palindrome(testArr));
console.timeEnd('执行用时');