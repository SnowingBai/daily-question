/**
 * 杨辉三角
 * @param {number} numRows 
 */
const generate = function(numRows) {
  const list = []
  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1).fill(1)
    for (let j = 1; j < i; j++) {
      row[j] = list[i - 1][j - 1] + list[i - 1][j]
    }
    list.push(row)
  }

  return list
}

// 思路：
// 除首尾元素特殊，其他元素错位相加
// [
//   [1],
//   [1,1],
//   [1,2,1],
//   [1,3,3,1],
//   [1,4,6,4,1]
// ]