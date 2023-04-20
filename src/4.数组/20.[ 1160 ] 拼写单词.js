/**
 * * 题目名称：拼写单词
 * * 题目地址：https://leetcode-cn.com/problems/find-words-that-can-be-formed-by-characters
 */

// * 思路：
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
import _ from 'lodash'
var countCharacters = function(words, chars) {
  let resLen = 0;
    const charsMap = _.countBy(chars)
    words.forEach((item)=>{
      const wordMap = _.countBy(item)
      let count =0;
      for(let k in wordMap){
        console.log(k,wordMap[k]);
        if(wordMap[k]<= charsMap[k]){
          count+=wordMap[k]
          continue
        }else{
          break;
        }
      }
      if(count === item.length) resLen += count
    })
    return resLen
};


// 测试用例
const words = ["cat","bt","hat","tree"]
const chars = "atach"
const words2 = ["helllo","world","leetcode"]
const chars2 = "welldonehoneyr"

console.time('执行用时');
// console.log(countCharacters(words,chars));
console.log(countCharacters(words2,chars2));
console.timeEnd('执行用时');