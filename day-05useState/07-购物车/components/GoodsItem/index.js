import React from 'react'
import './index.scss'
export default function GoodsItem(props) {
  // props是{id：1，goods_state:'已下架', goods_name:'商品1',goods_price:100,goods_count:1}
  return (
    <div className="my-goods-item">
      <div className="left">
        <div className="custom-control custom-checkbox">
          {/* onChange不能自己改，需要让父组件改，子组件传id给父组件 */}
          <input
            type="checkbox"
            className="custom-control-input"
            id={props.id}
            checked={props.goods_state}
            onChange={() => props.changeState(props.id)}
          />
          {/* htmlFor绑定了htmlFor。如果id有多个，他只能识别第一个。所以id不能写死 */}
          <label className="custom-control-label" htmlFor={props.id}>
            <img src={props.goods_img} alt="" />
          </label>
        </div>
      </div>
      <div className="right">
        <div className="top">{props.goods_name}</div>
        <div className="bottom">
          <span className="price">¥ {props.goods_price}</span>
          <span>counter组件-{props.goods_count}</span>
        </div>
      </div>
    </div>
  )
}
