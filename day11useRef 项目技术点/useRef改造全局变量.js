// ; 函数组件中点击事件的函数，如果函数中使用了组件中的state，那么这个函数就是一个闭包函数。如果函数中使用了定时器，那么当时点击环境下的数据会被保存下来，定时器执行时，会根据保存下来的数据，执行相应的操作。

import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
// let timer;//这个只执行一次，但是是全局变量
const timeRef = useRef(-1);//由于组件可能会被多次渲染，全局变量会被数据覆盖，所以用useRef来保存数据,useRef会在每个使用函数组件的地方有自己的数据，不会相互覆盖
export default function NotFound() {
    const [time, setTime] = useState(5);
    // ; let timer;//每次执行就变空了，因为重新渲染了不是上一次的。所以最好是放到最外层
    useEffect(() => {
         timeRef.current = setTimeout(() => {
            // ; 设置时间，重新渲染，如果使用了清楚副作用，只执行一次。定时器跑的是第一次快照的定时器，5-1=4，第二次渲染的数据不会来到第一次执行，所以永远是4.因为新渲染的数据不会去到第一次
            setTime(time - 1) //这个是异步的，数据还没改变
            // ; if (time === 0) {
            // ; 上一行代码渲染完成之后，timer已经改变了,上一次快照的timer拿不到了，所以没有清除掉，所以可以放到外面去监听timer
            // ;     clearTimeout(timer)
            // ; }
        }, 1000)
        return () => {
            // 每一次执行数据渲染的时候，都会执行函数渲染，因为每一次都开定时器，所以需要每一次执行完之后都去清除定时器
            clearTimeout(timeRef.current)
        }
        ; 注意这里清除副作用不能依赖time，因为setInterval定时器一直在执行，依赖一直执行，每次清除定时器是不对的,只要一改time时间就又开一个，无限循环开定时器，其实我们想要的效果是开一次就行，不要更着time改变
    })
    useEffect(() => {
        // ; 定时器清除时机，当time改变的时候清除定时器
        // ; time为0的时候清除定时器
        if (time <= 0) {
             clearTimeout(timeRef.current)
        }
    }, [time])
    return (
        <div>
            <h1>404</h1>
            <p>页面不存在，{time}秒后跳转</p>
        </div>
    )
}