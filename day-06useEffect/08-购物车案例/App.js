import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import GoodsItem from './components/GoodsItem'
import './App.scss'
import { useState, useEffect, createContext } from 'react'
import axios from 'axios'
export const Context = createContext()
export default function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    // 判断本地是否有数据
    const arr = JSON.parse(localStorage.getItem('list')) || []
    if (arr.length) {
      return setList(arr)
    }
    // 本地没有数据，发送请求，获取数据
    const getList = async () => {
      const res = await axios.get('https://www.escook.cn/api/cart')
      setList(res.data.list)
    }
    getList()
  }, [])

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

  const changeCount = (id, count) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            goods_count: count
          }
        } else {
          return item
        }
      })
    )
  }
  return (
    <Context.Provider value={{ changeCount }}>
      <div className="app">
        <MyHeader>购物车</MyHeader>

        {list.map((item) => (
          <GoodsItem
            key={item.id}
            {...item}
            changeState={changeState}
            changeCount={changeCount}
          ></GoodsItem>
        ))}

        <MyFooter list={list} changeAll={changeAll}></MyFooter>
      </div>
    </Context.Provider>
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
