// import BigNumber from 'bignumber.js'
// const x = new BigNumber('1111222233334444555566')
// const y = new BigNumber('123123123123123')

// console.log(x.lte(y))

// console.log(x.div(y).toFixed())
////lte小于等于 multipliedBy乘法 div是除 pow求次方 minus减法
x.plus(y).toFixed()
x.lte(y)
// function add(a, b) {
//   const aArr = a.split('').reverse()
//   const bArr = b.split('').reverse()
//   if (a.length > b.length) {
//     for (var i = 0; i < a.length - b.length; i++) {
//       bArr.push('0')
//     }
//   } else {
//     for (var j = 0; j < b.length - a.length; j++) {
//       aArr.push('0')
//     }
//   }
//   console.log(aArr, bArr)
//   // 求和
//   let isMore = false
//   const result = aArr.map((item, index) => {
//     let sum
//     if (isMore) {
//       sum = Number(item) + Number(bArr[index]) + 1
//     } else {
//       sum = Number(item) + Number(bArr[index])
//     }
//     if (sum >= 10) {
//       sum = sum % 10
//       isMore = true
//     } else {
//       isMore = false
//     }
//     return sum
//   })
//   console.log(result.reverse().join(''))
// }

// add('18', '2111911111111111111111111')

function add(a, b) {
  let aArr = a.split('').reverse()
  let bArr = b.split('').reverse()

  if (a.length > b.length) {
    for (var i = 0; i < a.length - b.length; i++) {
      bArr.push('0')
    }
  } else {
    for (var j = 0; j < b.length - a.length; j++) {
      aArr.push('0')
    }
  }
  console.log(aArr, bArr)
  // 求和
  // 是否超过10
  let isMore = false
  const result = aArr.map((item, index) => {
    let sum
    if (isMore) {
      sum = +item + +bArr[index] + 1
    } else {
      // 数字和数字相加+，前面的+是转数字
      sum = +item + +bArr[index]
    }

    // 判断是否需要进1
    if (sum >= 10) {
      isMore = true
      sum = sum % 10
    } else {
      isMore = false
    }
    return sum
  })
  console.log(result.reverse().join(''))
}

add('88123123123123123123', '12399123123123123123123123123')
