/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @FilePath: \leetcodeStudy\src\5.链表\05. 从尾到头打印链表.js
 * @Description: 
 */
/**
 * * 题目名称：从尾到头打印链表
 * * 题目地址：https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof
书店店员有一张链表形式的书单，每个节点代表一本书，节点中的值表示书的编号。
为更方便整理书架，店员需要将书单倒过来排列，就可以从最后一本书开始整理，
逐一将书放回到书架上。请倒序返回这个书单链表。

示例 1：

输入：head = [3,6,4,1]

输出：[1,4,6,3]
 
*/

// * 思路：
function listNode(val) {
    this.val = val;
    this.next = null;
}


function createListNode(arr) {
    if (arr.length == 0) return null
    let head = new listNode(arr[0]) // 保留头节点
    let cur = head; // 引用head头指针地址
    for (let i = 1; i < arr.length; i++) {
        cur.next = new listNode(arr[i])
        cur = cur.next
    }
    return head
}

let rawList = createListNode([3, 6, 4, 1])

const reverseList = (head) => {
    if (!head) return []
    let res = []
    while (head) {
        res.push(head.val)
        head = head.next
    }
    return res.reverse()
}
// 测试用例
let test = ''

console.time('执行用时');
console.log(reverseList(rawList));
console.timeEnd('执行用时');