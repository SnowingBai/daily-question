/**
 * 无重叠区间
 * @param {number[][]} intervals 
 * @return {number}
 */
const eraseOverlapIntervals = function(intervals) {
  if (!intervals.length) return 0
  
  intervals.sort((a, b) => a[1] - b[1])
  const len = intervals.length
  let right = intervals[0][1]
  let times = 1
  for (let i = 1; i < len; i++) {
    if (intervals[i][0] >= right) {
      times++
      right = intervals[i][1]
    }
  }

  return len - times
}

// 思路：
// 按右区间排序
// 计算区间变更的次数 times
// 则重叠的区间为length - times
