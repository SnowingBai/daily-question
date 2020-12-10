/**
 * 柠檬水找零
 * @param {number[]} bills 
 * @return {boolean}
 */
const lemonadeChange = function(bills) {
  let five = 0, ten = 0

  for (const price of bills) {
    if (price === 5) five++
    else if (price === 10) {
      five--
      ten++
    } else if (ten > 0) {
      ten--
      five--
    } else five -= 3

    if (five < 0) return false
  }

  return true
}

// 思路：
// 判断5元的剩余情况决定是否可以继续找零