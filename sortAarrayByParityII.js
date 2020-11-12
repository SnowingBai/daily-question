/**
 * 按奇偶排序数组 - ii
 * @param {number[]} A 
 * @return {number[]}
 */
const sortArrayByParityII = function(A) {
  let j = 1 // 奇数索引
  for (let i = 0; i < A.length; i += 2) {
    if (A[i] & 1) {
      while (A[j] & 1) {
        j += 2
      }

      [A[i], A[j]] = [A[j], A[i]]
    }
  }

  return A
}

// 思路：双指针 + 位运算（判断奇偶）
