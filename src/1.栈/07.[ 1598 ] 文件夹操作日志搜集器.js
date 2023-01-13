/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:03
 * @LastEditTime: 2023-01-13 08:36:29
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\1.栈\07.[ 1598 ] 文件夹操作日志搜集器.js
 * @Description: 
 */
/**
 * * 题目名称：文件夹操作日志搜集器
 * * 题目地址：https://leetcode-cn.com/problems/crawler-log-folder
 * 
 * 每当用户执行变更文件夹操作时，LeetCode 文件系统都会保存一条日志记录。
    下面给出对变更操作的说明：
    - "../" ：移动到当前文件夹的父文件夹。如果已经在主文件夹下，则 继续停留在当前文件夹 。
    - "./" ：继续停留在当前文件夹。
    - "x/" ：移动到名为 x 的子文件夹中。题目数据 保证总是存在文件夹 x 。
    给你一个字符串列表 logs ，其中 logs[i] 是用户在 ith 步执行的操作。
    文件系统启动时位于主文件夹，然后执行 logs 中的操作。
    执行完所有变更文件夹操作后，请你找出 返回主文件夹所需的最小步数 。
 */

// * 思路：
/**
 * 目标：求出最后返回根目录的步骤
 * 情况：三种情况，分别为"../"返回上一级 => depth-1
 *                      "./" 当前目录 => depth不变
 *                      "x/" 下一层子文件夹 => depth+1
 */

/**
 * @param {string[]} logs
 * @return {number}
 */
const minOperations = function (logs) {
    let depth = 0;
    for (const log of logs) {
        if (log === './') {
            continue
        } else if (log === '../') {
            if (depth > 0) {
                depth--
            }
        } else {
            depth++
        }
    }
    return depth
};

// 测试用例
let test = ["d1/","d2/","./","d3/","../","d31/"]

console.time('执行用时');
console.log(minOperations(test));
console.timeEnd('执行用时');