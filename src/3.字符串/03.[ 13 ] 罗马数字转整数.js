/*
 * @Author: Zkiki
 * @Date: 2023-01-02 15:57:04
 * @LastEditTime: 2023-02-14 12:56:58
 * @LastEditors: Please set LastEditors
 * @FilePath: \leetcodeStudy\src\3.字符串\03.[ 13 ] 罗马数字转整数.js
 * @Description: 
 */
/**
 * * 题目名称：罗马数字转整数
 * * 题目地址：https://leetcode-cn.com/problems/roman-to-integer
 *  罗马数字 2 写做 II ，即为两个并列的 1 。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给定一个罗马数字，将其转换成整数。
 */

// * 思路：默认都是前面的大于后面的，特殊情况前面小于后面的就取反相加
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const romanMap = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000]
    ])
    let sum = 0;
    const count = s.length
    for (let i = 0; i < count; ++i) {
        const value = romanMap.get(s[i])
        if (value < romanMap.get(s[i + 1])) {
            //如果前面的值小于后面的，就要减去
            sum -= value
        } else {
            //如果前面的值大于后面的，直接加上
            sum += value
        }
    }
    return sum;
};


// 测试用例
let test = 'LVIII'
let test2 = 'IV'
console.time('执行用时');
console.log(romanToInt(test));
console.log(romanToInt(test2));
console.timeEnd('执行用时');