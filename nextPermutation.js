/**
 * 下一个排列
 * @param {number[]} nums 
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function(nums) {
  let len = nums.length
  let i = len - 2

  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--
  }

  if (i >= 0) {
    let j = len - 1
    while (j >= 0 && nums[i] >= nums[j]) {
      j--
    }
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }

  reverse(nums, i + 1)
}

function reverse(nums, start) {
  let left = start, right = nums.length - 1
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]]
    left++
    right--
  }
}

// 思路：
// 逆向遍历，找到元素索引i，使得 A[i] < A[i + 1]
// 逆向遍历，找到元素索引j，使得 A[i] < A[j]
// 交换A[i] 和 A[j]
// 为保证获得的数据是最小大于当前数据的，需要将剩余部分[i + 1, end)升序排序
// 找到索引i后，则i + 1之后的剩余部分一定是单调递减的，所以只需将剩余部分首尾交换即可 [left, right] = [right, left]
