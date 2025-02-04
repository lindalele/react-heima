import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import GoodsItem from './components/GoodsItem'
import './App.scss'
import { useState, useEffect } from 'react'

const arr = [
  {
    id: 1,
    goods_name:
      '班俏BANQIAO超火ins潮卫衣女士2020秋季新款韩版宽松慵懒风薄款外套带帽上衣',
    goods_img: 'https://www.escook.cn/vuebase/pics/1.png',
    goods_price: 108,
    goods_count: 1,
    goods_state: true
  },
  {
    id: 2,
    goods_name:
      '嘉叶希连帽卫衣女春秋薄款2020新款宽松bf韩版字母印花中长款外套ins潮',
    goods_img: 'https://www.escook.cn/vuebase/pics/2.png',
    goods_price: 129,
    goods_count: 1,
    goods_state: true
  },
  {
    id: 3,
    goods_name: '思蜜怡2020休闲运动套装女春秋季新款时尚大码宽松长袖卫衣两件套',
    goods_img: 'https://www.escook.cn/vuebase/pics/3.png',
    goods_price: 198,
    goods_count: 1,
    goods_state: false
  },
  {
    id: 4,
    goods_name: '思蜜怡卫衣女加绒加厚2020秋冬装新款韩版宽松上衣连帽中长款外套',
    goods_img: 'https://www.escook.cn/vuebase/pics/4.png',
    goods_price: 99,
    goods_count: 1,
    goods_state: false
  },
  {
    id: 5,
    goods_name:
      '幂凝早秋季卫衣女春秋装韩版宽松中长款假两件上衣薄款ins盐系外套潮',
    goods_img: 'https://www.escook.cn/vuebase/pics/5.png',
    goods_price: 156,
    goods_count: 1,
    goods_state: true
  },
  {
    id: 6,
    goods_name: 'ME&CITY女装冬季新款针织抽绳休闲连帽卫衣女',
    goods_img: 'https://www.escook.cn/vuebase/pics/6.png',
    goods_price: 142.8,
    goods_count: 1,
    goods_state: true
  },
  {
    id: 7,
    goods_name:
      '幂凝假两件女士卫衣秋冬女装2020年新款韩版宽松春秋季薄款ins潮外套',
    goods_img: 'https://www.escook.cn/vuebase/pics/7.png',
    goods_price: 219,
    goods_count: 2,
    goods_state: true
  },
  {
    id: 8,
    goods_name: '依魅人2020休闲运动衣套装女秋季新款秋季韩版宽松卫衣 时尚两件套',
    goods_img: 'https://www.escook.cn/vuebase/pics/8.png',
    goods_price: 178,
    goods_count: 1,
    goods_state: true
  },
  {
    id: 9,
    goods_name:
      '芷臻(zhizhen)加厚卫衣2020春秋季女长袖韩版宽松短款加绒春秋装连帽开衫外套冬',
    goods_img: 'https://www.escook.cn/vuebase/pics/9.png',
    goods_price: 128,
    goods_count: 1,
    goods_state: false
  },
  {
    id: 10,
    goods_name:
      'Semir森马卫衣女冬装2019新款可爱甜美大撞色小清新连帽薄绒女士套头衫',
    goods_img: 'https://www.escook.cn/vuebase/pics/10.png',
    goods_price: 153,
    goods_count: 1,
    goods_state: false
  }
]
export default function App() {
  const [list, setList] = useState(() => {
    return JSON.parse(localStorage.getItem('list')) || arr
  })
  const changeState = (id) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            goods_state: !item.goods_state
          }
        } else {
          return item
        }
      })
    )
  }

  // 修改所有的状态
  const changeAll = (value) => {
    setList(
      list.map((item) => {
        return {
          ...item,
          goods_state: value
        }
      })
    )
  }

  // list更新的时候，需要存储到本地
  // useEffect(() => {
  //   setList(JSON.parse(localStorage.getItem('list')) || arr)
  // }, [])
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <div className="app">
      <MyHeader>购物车</MyHeader>

      {list.map((item) => (
        <GoodsItem
          key={item.id}
          {...item}
          changeState={changeState}
        ></GoodsItem>
      ))}

      <MyFooter list={list} changeAll={changeAll}></MyFooter>
    </div>
  )
}
// 超级大的数， 字符串类型，，number转不了，让数字加起来。

// // 把字符串转成数字  123123123123123123
// function toArr(str) {
//   const result = []
//   const arr = str.split('').reverse()
//   while (arr.length > 4) {
//     result.push(arr.splice(0, 4).reverse().join(''))
//   }
//   if (arr.length > 0) {
//     result.push(arr.reverse().join(''))
//   }
//   // console.log(result)
//   return result.reverse()
// }
// function add(a, b) {
//   const arr1 = toArr(a)
//   const arr2 = toArr(b)

//   if (arr1.length < arr2.length) {
//     // 补0
//     for (var i = 0; i <= arr2.length - arr1.length; i++) {
//       arr1.unshift('0')
//     }
//   } else {
//     for (var i = 0; i <= arr1.length - arr2.length; i++) {
//       arr2.unshift('0')
//     }
//   }

//   const res = arr2.map((item, index) => {
//     return +item + +arr1[index] + ''
//   })
//   console.log(res.join(''))
// }

// add('123456789', '128781723123123123')
// add('123456711', '128781723123123111')
// add('123456722', '128781723123123122')
// add('123456733', '128781723123123133')
