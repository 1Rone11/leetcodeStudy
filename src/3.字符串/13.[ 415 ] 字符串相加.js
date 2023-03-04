/**
 * * 题目名称：字符串相加
 * * 题目地址：https://leetcode-cn.com/problems/add-strings
 * 
 *  给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
    你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。
*/

// * 思路：模拟人工进行加法运算的操作，carry:是否进位，tmp:当前位数值，
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0
    let tmp = 0;
    let sum = []
    while (i >= 0 || j >= 0) {
        const n1 = i >= 0 ? num1.charAt(i) - '0' : 0
        const n2 = j >= 0 ? num2.charAt(j) - '0' : 0
        tmp = n1 + n2 + carry
        carry = Math.trunc((n1 + n2 + carry) / 10);//进位
        sum.push(tmp % 10)
        j--
        i--
    }
    if (carry) return '1' + sum.reverse().join('')
    return sum.reverse().join('')
};

// 测试用例
let test = ['51189', '967895']

console.time('执行用时');
console.log(addStrings(test[0], test[1]));
console.timeEnd('执行用时');