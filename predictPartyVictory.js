/**
 * Dota2 参议院
 * @param {string} senate 
 * @return {string}
 */
const predictPartyVictory = function(senate) {
  let len = senate.length
  const radiant = []
  const dire = []

  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === 'R') {
      radiant.push(i)
    } else {
      dire.push(i)
    }
  }

  while (radiant.length && dire.length) {
    if (radiant[0] < dire[0]) {
      radiant.push(radiant[0] + len)
    } else {
      dire.push(dire[0] + len)
    }

    radiant.shift()
    dire.shift()
  }

  return radiant.length ? 'Radiant' : 'Dire'
}

// 思路：
// 分别用两个数组存储两个成员的位置
// 同时比较两个成员
// 靠前的成员 + senate.length
// 保存到下一轮中
// 删除当前的两项
// 最终有剩余的即为获胜者