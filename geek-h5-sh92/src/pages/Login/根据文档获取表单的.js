查看Ant design mobile文档发现链接去github上，然后根据文档获取表单的
 export default function Login() {
    // Form组件会给一个useForm方法，通过这个方法可以获取到表单的实例
  const [form] = Form.useForm();

  const [time, setTime] = useState(0);
  const onFinish = (values) => {
    console.log('Success:', values);
    const mobile = form.getFieldValue('mobile');

  };
  const onGetCode = async () => {
    if (time > 0) {
      // 说明倒计时正在运行
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

// 倒计时的写法1.使用setTime
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

    
  }

  useEffect(() => {
    if (time === 0) {
      clearInterval(timeIdRef.current)
    }
  }, [time])
  return (
    <Form form={form} onFinish={onFinish} >
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
          <Form.Item></Form.Item>
    </Form>
  )
 }