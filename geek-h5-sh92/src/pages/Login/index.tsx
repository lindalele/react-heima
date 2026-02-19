import styles from './index.module.scss'
import { NavBar, Form, Input, List, Button, Toast } from 'antd-mobile'
import { useHistory, useLocation } from 'react-router-dom'
import { LoginForm } from '@/types/data'
import { useDispatch } from 'react-redux'
import { getCode, login } from '@/store/actions/login'
import { useRef, useState, useEffect } from 'react'
import { FormInstance } from 'antd-mobile/es/components/form'
import { InputRef } from 'antd-mobile/es/components/input'
import { useCountDown } from 'ahooks'
import { AxiosError } from 'axios'
export default function Login() {
  const history = useHistory()
  const dispatch = useDispatch()
  const location = useLocation<{ from: string }>()
  console.log(location.state)
  const onFinish = async (values: LoginForm) => {
    try {
      await dispatch(login(values))
      Toast.show({
        content: '登录成功',
        icon: 'success',
      })
      const { from } = location.state || { from: '/home' }
      // 跳转到首页
      history.replace(from)
      // trycatch的e不允许指定类型，因为类型可能变量报错等，所以只能是any类型
    } catch (e) {
      const error = e as AxiosError<{ message: string }>
      console.log()
    }
  }

  // 1. 获取到手机号
  // 2. 校验手机号是否合法
  // 3. 发送请求获取验证码
  const formRef = useRef<FormInstance>(null)
  // InputRef来自antd-mobile提供的<Input ref={mobileRef}>提供的类型
  const mobileRef = useRef<InputRef>(null)

  // 倒计时
  // 定时器写法1 setTime
  const [time, setTime] = useState(0)
  // 写法2 使用ref
  const timeRef = useRef(0)
  const timeIdRef = useRef(0)
  // const [count, setCount] = useState(0)
  // const [countDown] = useCountDown({
  //   targetDate: count,
  // })
  const onGetCode = async () => {
    // if (countDown > 0) {
    //   // countDown大于0，说明倒计时正在运行，
    //   return
    // }
    if (time > 0) {
      // countDown大于0，说明倒计时正在运行，
      return
    }
    // 获取手机号
    const mobile = formRef.current!.getFieldValue('mobile')
    // 获取手机号校验失败的错误信息
    const error = formRef.current!.getFieldError('mobile')
    if (!mobile || error?.length > 0) {
      // 不应该发送请求
      // 让手机号自动获取焦点
      mobileRef.current?.focus()
      return
    }
    await dispatch(getCode(mobile))
    // console.log('开启倒计时')
    setTime(5)
    // 写法1.1
    // setInterval可能是node的setInterval,所以需要使用window.setInterval
    timeIdRef.current = window.setInterval(() => {
      // ******setTime还可以接受一个函数，函数参数是最新的time,因为setTime里面的函数会访问自己函数里面的time,不会去访问外面的闭包的time。
      // 相当于类组件的写法，参数state也是最新的值setState((state) => state - 1)
      // 如果是setTime(time-1)的写法,那么每次都是访问的闭包的time,而不是最新的time
      setTime((v) => v - 1) //会导致组件更新
      // 性能优化，和渲染无关的，一定不要放setTime这种状态里面,开一个定时器，不需要去更新渲染。 对于定时器，不要放状态里，应该放ref里
    }, 1000)
    // 写法2.1 ref
    // timeRef.current = 5
    //  timeIdRef.current = setInterval(() => {
    //   // setTime((v) => v - 1)
    //   timeRef.current--
    //   setTime(timeRef.current - 1)
    // }, 1000)

    // setCount(Date.now() + 60 * 1000)
  }
  useEffect(() => {
    if (time === 0) {
      clearInterval(timeIdRef.current)
    }
  }, [time])
  // 组件销毁的时候，清除定时器.【】空依赖项，表示只执行一次清理
  useEffect(() => {
    return () => {
      clearInterval(timeIdRef.current)
    }
  }, [])
  return (
    <div className={styles.root}>
      <NavBar onBack={() => history.go(-1)}>登录</NavBar>

      {/* 表单 */}
      <div className="login-form">
        <h2 className="title">账号登录</h2>

        {/* 失去焦点的时候以及改变的时候触发校验 */}
        <Form
          validateTrigger={['onChange', 'onBlur']}
          onFinish={onFinish}
          ref={formRef}
          initialValues={{
            mobile: '13911111111',
            code: '246810',
          }}
        >
          <Form.Item
            className="login-item"
            name="mobile"
            rules={[
              {
                required: true,
                message: '手机号不能为空',
              },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '手机号格式错误',
              },
            ]}
          >
            {/* 关闭历史记录 */}
            <Input
              placeholder="请输入手机号"
              autoComplete="off"
              ref={mobileRef}
            ></Input>
          </Form.Item>
          {/* 左右布局 用list  */}
          <List.Item
            className="login-code-extra"
            extra={
              <span className="code-extra" onClick={onGetCode}>
                {countDown === 0
                  ? '发送验证码'
                  : `${Math.round(countDown / 1000)}s后发送`}
              </span>
            }
          >
            <Form.Item
              className="login-item"
              name="code"
              rules={[
                {
                  required: true,
                  message: '验证码不能为空',
                },
                {
                  pattern: /^\d{6}$/,
                  message: '验证码格式错误',
                },
              ]}
            >
              <Input autoComplete="off" placeholder="请输入验证码"></Input>
            </Form.Item>
          </List.Item>
          <Form.Item>
            {/* 这是提交按钮 */}

            <Button
              color="primary"
              type="submit"
              block
              className="login-submit"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
