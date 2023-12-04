/**
 * * 题目名称：反转链表
 * * 题目地址：https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof
 * 示例 1：
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
示例 2：
输入：head = [1,2]
输出：[2,1]
示例 3：
输入：head = []
输出：[]
 */

// * 思路：

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
 * @param {ListNode} head
 * @return {ListNode}
 * 迭代解法
 */
var trainningPlan = function (head) {
    let prev = null;
    let curr = head;
    while (curr) {
        // 将链表进行反转
        const next = curr.next;
        curr.next = prev;
        // 换到下一个位置,准备下一次遍历
        prev = curr;
        curr = next;
    }
    return prev;
};
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 递归解法
 */
const trainningPlan2 = function (head) {
    // 递归终止条件
    if (!head || !head.next) return head;

    const newHead = trainningPlan2(head.next);
    // 反转节点
    head.next.next = head;
    head.next = null;
    return newHead;
}

// 测试用例
let test = createListNode([1, 2, 3, 4, 5])
let test2 = createListNode([1, 2])
let test3 = createListNode([])

console.time('执行用时');
console.log(trainningPlan2(test));
console.log(trainningPlan2(test2));
console.log(trainningPlan2(test3));
console.timeEnd('执行用时');