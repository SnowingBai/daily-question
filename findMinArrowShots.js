/**
 * 用最少数量的箭引爆气球
 * @param {number[][]} points 
 * @return {number}
 */
const findMinArrowShots = function(points) {
  if (!points.length) return 0

  let res = 1
  let aim = points[0][1]
  points.sort((a, b) => a[1] - b[1])

  for (const [left, right] of points) {
    if (aim < left) {
      aim = right
      res++
    }
  }

  return res
}

// 思路：
// 将points按右边界升序排序
// 以第一个点右边界为比较点
// 遍历points，当比较点小于当前点位左边界时，则该点不在区间，需要新的一支箭，res++，更新比较点为当前点位
