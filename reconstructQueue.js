/**
 * 根据身高重建队列
 * @param {number[][]} people 
 * @return {number[][]}
 */
const reconstructQueue = function(people) {
  let res = []
  people.sort((o1, o2) => o1[0] === o2[0] ? o1[1] - o2[1] : o2[0] - o1[0])

  people.forEach(item => {
    res.splice(item[1], 0, item)
  })

  return res
}

// 思路：
// 先降序排 people[0]
// 再升序排 people[1]