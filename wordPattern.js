/**
 * 单词规律
 * @param {string} pattern 
 * @param {string} s 
 * @return {boolean}
 */
const wordPattern = function(pattern, s) {
  let words = s.split(' ')
  if (words.length !== pattern.length) {
    return false
  }

  let pMap = new Map()
  let wMap = new Map()

  for (const [i, word] of words.entries()) {
    const char = pattern[i]
    if (
      pMap.has(word)
        && pMap.get(word) !== char
        || wMap.has(char)
        && wMap.get(char) !== word
    ) {
      return false
    }

    pMap.set(word, char)
    wMap.set(char, word)
  }

  return true
}

// 思路：
// map双映射
// 字母映射单词
// 单词映射字母
// 不匹配时return false