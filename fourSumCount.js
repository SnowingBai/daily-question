/**
 * 四数相加-ii
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
const fourSumCount = function(A, B, C, D) {
  let res = 0
  let map = new Map()
  for (const i of A) {
    for (const j of B) {
      map.set(i + j, (map.get(i + j) || 0) + 1)
    }
  }

  for (const m of C) {
    for (const n of D) {
      if (map.has(-m - n)) {
        res += map.get(-m - n)
      }
    }
  }

  return res
}
// 思路：
// map + 双指针
