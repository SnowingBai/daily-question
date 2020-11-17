/**
 * 
 * @param {number} R 
 * @param {number} C 
 * @param {number} r0 
 * @param {number} c0 
 */
const allCellsDistOrder = function(R, C, r0, c0) {
  let obj = {}
  let dist = 0

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      dist = Math.abs(i - r0) + Math.abs(j - c0)
      if (obj[dist]) obj[dist].push([i, j])
      else obj[dist] = [[i, j]]
    }
  }

  let res = []
  for (const key in obj) {
    res.push(...obj[key])
  }

  return res
}

// 思路：桶排序
