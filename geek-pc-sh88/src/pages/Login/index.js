import React, { useState } from 'react'
import logo from '@/assets/logo.png'
import { Card, Form, Input, Button, Checkbox, message } from 'antd'
import styles from './index.module.scss'
import { useDispatch } from 'react-redux'
import { login } from '@/store/actions/login'
import { useHistory, useLocation } from 'react-router-dom'
// 组件名必须大写开头
export default function Login(props) {
  // props打印{history:{},location:{state:{}},match:{},staticContext:undefined}
  // 当表单校验通过，就会执行onFinished,并且会携带数据
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const [loading, setLoading] = useState(false)

  const onFinish = async (values) => {
    // 设置加载状态为true
    setLoading(true)
    // console.log('Success:', values)
    // 发送请求，进行登录
    try {
      // 调用dispatch函数，发送登录请求
      await dispatch(login(values))
      // 登录成功后，显示成功提示信息
      message.success('登录成功', 1, () => {
        // 在登录页面判断是否携带了from属性，如果有，就跳转到from属性对应的路由，如果没有，就跳转到首页
        const from = location.state ? location.state.from : '/home'
        // 这里应该用replace，因为登录成功后，不应该再返回登录页面了
        // redirect是重定向，意思是来到了这个页面，但是去了另一个页面
        // 我们访问/home/publish，token被清，被redirect到/login，登录成功，后替换login变原来的页面，继续原来的路由栈
        history.replace(from)
      })
    } catch (e) {
      message.error(e.response.data.message, 1, () => {
        setLoading(false)
      })
    }
  }
  return (
    <div className={styles.root}>
      <Card className="login-container">
        {/* 图片 */}
        <img className="login-logo" src={logo} alt="" />
        {/* 表单 */}
        {/* validateTrigger可以给整个Form或者 单个Form.Item设置
         */}
        <Form
          //  autoComplete="off"不会有提示
          autoComplete="off"
          size="large"
          validateTrigger={['onChange', 'onBlur']}
          // onFinish点击登录按钮校验通过会走onFinish，并且会携带数据
          onFinish={onFinish}
          // initialValues提供初始值
          initialValues={{
            mobile: '13911111111',
            code: '246810',
            agree: true,
          }}
        >
          {/* 校验必须要有name */}
          {/* validateTrigger写在Form.Item上，写在Form上，Form.Item的校验会覆盖Form的校验 */}
          <Form.Item
            name="mobile"
            rules={[
              {
                required: true,
                message: '手机号不能为空',
                validateTrigger: ['onChange', 'onBlur'],
              },
              { pattern: /^1[3-9]\d{9}$/, message: '手机号格式错误' },
            ]}
          >
            {/* 用antd的Input组件，不用受控或者非受控组件，直接就把数据给到onFinish */}
            <Input placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[
              { required: true, message: '验证码不能为空' },
              { pattern: /^\d{6}$/, message: '验证码格式错误' },
            ]}
          >
            <Input placeholder="请输入验证码" />
          </Form.Item>
          {/* 特殊：valuePropName是Checkbox需要的，告诉form要拿的值不是value，而是checked属性。 */}
          {/* checkbox不能用required,因为required是只要值就行，而checkbox的值是true、false,都是有值的 */}
          {/* 自定义校验 ：返回值需要时promise */}
          <Form.Item
            name="agree"
            valuePropName="checked"
            rules={[
              {
                validator: (rule, value) => {
                  if (value === true) {
                    return Promise.resolve()
                  } else {
                    return Promise.reject(new Error('请阅读并同意条款和协议'))
                  }
                },
              },
            ]}
          >
            <Checkbox>我已阅读并同意[隐私条款]和[用户协议]</Checkbox>
          </Form.Item>
          <Form.Item>
            {/* htmlSubmit="button"是普通按钮，点了表单不会提交，htmlType="submit"点了表单就会提交 */}

            <Button type="primary" htmlType="submit" block loading={loading}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
