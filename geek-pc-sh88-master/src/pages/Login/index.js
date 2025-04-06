import React, { useState } from 'react'
import logo from '@/assets/logo.png'
import { Card, Form, Input, Button, Checkbox, message } from 'antd'
import styles from './index.module.scss'
import { useDispatch } from 'react-redux'
import { login } from '@/store/actions/login'
import { useHistory, useLocation } from 'react-router-dom'
export default function Login(props) {
  // 当表单校验通过，就会执行onFinished,并且会携带数据
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const [loading, setLoading] = useState(false)

  const onFinish = async (values) => {
    setLoading(true)
    // console.log('Success:', values)
    // 发送请求，进行登录
    try {
      await dispatch(login(values))
      message.success('登录成功', 1, () => {
        const from = location.state ? location.state.from : '/home'
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
        {/* 表单 initialValues提供初始值
        jsx数组的写法validateTrigger={['onChange', 'onBlur']} 
        校验触发规则可以是写在Form上，也可以在Form.Item 上*/}
        {/* onFinish会把表单校验通过的数据传递给onFinish，所以input就不用写onChange,value等，onFinish校验通过直接会给到表单的值 */}
        <Form
          autoComplete="off"
          size="large"
          validateTrigger={['onChange', 'onBlur']}
          onFinish={onFinish}
          initialValues={{
            mobile: '13911111111',
            code: '246810',
            agree: true,
          }}
        >
          <Form.Item
            name="mobile"
            rules={[
              {
                required: true,
                message: '手机号不能为空',
              },
              { pattern: /^1[3-9]\d{9}$/, message: '手机号格式错误' },
            ]}
          >
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
          {/* valuePropName="checked" */}
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
          {/* htmlType="submit" 点了表单提交 htmlType="button" 点了表单不会提交*/}
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
