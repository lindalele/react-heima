import React from 'react'
import './index.scss'
export default function MyFooter({ list, changeAll }) {
  // 获取选中的商品
  const totalCount = list
    .filter((item) => item.goods_state)
    .reduce((prev, item) => prev + +item.goods_count, 0)

  const totalPrice = list
    .filter((item) => item.goods_state)
    .reduce((prev, item) => prev + item.goods_count * item.goods_price, 0)

  // 是否全部选中
  const isCheckAll = list.every((item) => item.goods_state)
  return (
    <div className="my-footer">
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="footerCheck"
          checked={isCheckAll}
          onChange={() => changeAll(!isCheckAll)}
        />
        <label className="custom-control-label" htmlFor="footerCheck">
          全选
        </label>
      </div>
      <div>
        <span>合计:</span>
        <span className="price">¥ {totalPrice}</span>
      </div>
      <button type="button" className="footer-btn btn btn-primary">
        结算 ({totalCount})
      </button>
    </div>
  )
}
