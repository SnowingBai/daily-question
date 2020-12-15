/**
 * 单调递增的数字
 * @param {number} N 
 * @return {number}
 */
const monotoneIncreasingDigits = function(N) {
  let arr = Array.from(N.toString())

  let i = 1
  while (i > 0 && arr[i - 1] <= arr[i]) {
    i++
  }

  if (i < arr.length) {
    while (i > 0 && arr[i - 1] > arr[i]) {
      arr[i - 1] -= 1
      i--
    }

    for (i += 1; i < arr.length; i++) {
      arr[i] = 9
    }
  }

  return arr.join('')
}
