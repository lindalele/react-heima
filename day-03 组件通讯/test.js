var str = '我叫[姓名]我的年级是[班级]'

var list = [
  { id: '618252ce240821414fcf05de', name: '[姓名]' },
  { id: '6182772b240821414fcf05e6', name: '[班级]' }
]
// 注意: 618252ce240821414fcf05de 是question_id; ‘618252ce240821414fcf05dd_open'是option_id
var totalAnswer = {
  '618252ce240821414fcf05de': { '618252ce240821414fcf05dd_open': '赵光宇' },
  '6182772b240821414fcf05e6': { '6182772b240821414fcf05e5_open': '一年级' }
}

str = list.reduce((prev, item) => {
  return prev.replace(item.name, () => Object.values(totalAnswer[item.id])[0])
}, str)

console.log(str)
 