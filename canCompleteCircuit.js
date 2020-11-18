/**
 * 加油站
 * @param {number[]} gas 
 * @param {number[]} cost 
 * @return {number}
 */
const canCompleteCircuit = function(gas, cost) {
  let res = null
  let index = null
  let minRes = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < gas.length; i++) {
    res += gas[i] - cost[i]
    if (res < minRes) {
      minRes = res
      index = i
    }
  }

  return res < 0 ? -1 : (index + 1) % gas.length
}

// 思路：
// 找到油耗最低点，下一个点就是起点
