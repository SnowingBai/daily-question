/**
 * 将数组拆分成斐波那契序列
 * @param {string} S 
 */
const splitIntoFibonacci = function(S) {
  let list = []
  backtrack(list, S, S.length, 0, 0, 0)
  return list
}

/**
 * 回溯+剪枝
 * @param {array} list 
 * @param {string} S 
 * @param {number} len 
 * @param {number} index 
 * @param {number} sum 
 * @param {number} prev 
 */
function backtrack(list, S, len, index, sum, prev) {
  if (index === len) {
    return list.length >= 3
  }

  let curr = 0
  for (let i = index; i < len; i++) {
    if (i > index && S[index] === '0') break

    curr = curr * 10 + S[i].charCodeAt() - '0'.charCodeAt()
    if (curr > Math.pow(2, 31) - 1) break

    if (list.length >= 2) {
      if (curr < sum) continue
      else if (curr > sum) break
    }

    list.push(curr)
    if (backtrack(list, S, len, i + 1, prev + curr, curr)) {
      return true
    } else {
      list.splice(list.length - 1, 1)
    }
  }

  return false
}