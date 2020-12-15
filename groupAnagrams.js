/**
 * 字母异位词分组
 * @param {string[]} strs 
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
  let map = new Map()
  for (const s of strs) {
    const key = Array.from(s).sort().toString()
    const list = map.get(key) || []
    list.push(s)
    map.set(key, list)
  }
  return Array.from(map.values())
}

// 思路：
// 遍历数组元素
// 元素排序后存储到map中
// 通过map查询异位词