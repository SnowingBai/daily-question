/**
 * 最接近原点的K个点
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
const kClosest = function(points, K) {
  if (!K || !points || !points.length) return []

  let left = 0, right = points.length - 1
  while (left <= right) {
    const mid = partition(points, left, right)
    if (mid === K) break
    else if (mid < K) left = mid + 1
    else right = mid - 1
  }
  return points.slice(0, K)
}

// 满足欧几里得距离的平方，无需开根，避免误差
const compare = (p) => p[0] ** 2 + p[1] ** 2

function partition (arr, left, right) {
  let pivot = left, index = left + 1
  for (let i = index; i <= right; i++) {
    if (compare(arr[i]) < compare(arr[pivot])) {
      [arr[i], arr[index]] = [arr[index], arr[i]]
      index++
    }
  }
  // 此时index左侧均比index小，右侧均比index大，因最后一步index依然会自增，所以pivot应为 index - 1
  [arr[pivot], arr[index - 1]] = [arr[index - 1], arr[pivot]]
  return index - 1
}

// 思路：
// 快排
// 找到一个索引值pivot，遍历数组，使得pivot左侧的值均小于pivot，右侧均大于pivot
// 当 pivot === K 时，即[0, pivot]完全符合要求
// 当 pivot < K 时，需要继续在右侧寻找，此时left = pivot + 1
// 当 pivot > K 时，需要继续在左侧寻找，此时right = pivot - 1
// 最终截取前K个元素
