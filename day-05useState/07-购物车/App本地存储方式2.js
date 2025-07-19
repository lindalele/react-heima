import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import GoodsItem from './components/GoodsItem'
import './App.scss'
import { useState, useEffect } from 'react'
// arr放在外面，这样可以避免App每次渲染都执行，重新创建数组
const arr = [
  {
    id: 1,
    goods_name:
      '班俏BANQIAO超火ins潮卫衣女士2020秋季新款韩版宽松慵懒风薄款外套带帽上衣',
    goods_img: 'https://www.escook.cn/vuebase/pics/1.png',
    goods_price: 108,
    goods_count: 1,
    goods_state: true,
  },
  {
    id: 2,
    goods_name:
      '嘉叶希连帽卫衣女春秋薄款2020新款宽松bf韩版字母印花中长款外套ins潮',
    goods_img: 'https://www.escook.cn/vuebase/pics/2.png',
    goods_price: 129,
    goods_count: 1,
    goods_state: true,
  },
  {
    id: 3,
    goods_name: '思蜜怡2020休闲运动套装女春秋季新款时尚大码宽松长袖卫衣两件套',
    goods_img: 'https://www.escook.cn/vuebase/pics/3.png',
    goods_price: 198,
    goods_count: 1,
    goods_state: false,
  },
]
// 小技巧：写完useSate,回车会自动引入react的useState
export default function App() {
  // 一来就能拿到结果初始化，所以写在useState可以，更方便有一点
  const [list, setList] = useState(() => {
    //     '初始值只调用一次，当组件第一次渲染的时候调用一次，使用setList更新状态的时候不会调用,使用的是上一次变化的数据'
    return JSON.parse(localStorage.getItem('list')) || arr
  })
  // 上面一行比较特殊，这里useState是只执行一次。 相当于useEffect(() => {},[]) 更好 只执行一次，useEffect是更好的选择。
  // const [list, setList] = useState([])
  // useEffect(() => { setList(JSON.parse(localStorage.getItem('list')) || arr) }, [])
  const changeState = (id) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            goods_state: !item.goods_state,
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
          goods_state: value,
        }
      })
    )
  }
  // 一进来取数据、 ，list需要是空的【】，然后从本地读取数据；const [list, setList] = useState([])
  // useEffect(() => {
  //   setList(JSON.parse(localStorage.getItem('list')) || arr)
  // }, [])
  // list更新的时候，需要存储到本地
  //  存数据 依赖项：list更新的时候，需要存储到本地
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
