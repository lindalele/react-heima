import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'
import {
  Card,
  Breadcrumb,
  Form,
  Input,
  Button,
  Space,
  Radio,
  Upload,
  message,
  Modal,
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link, useHistory, useParams } from 'react-router-dom'
import Channel from '@/components/Channel'
// 第二步
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useDispatch } from 'react-redux'
import {
  addArticle,
  editArticle,
  getArticleInfo,
} from '@/store/actions/article'
//1. import { useChannels } from '@/hooks'
// react-quill的使用，打开gthub,按照文档使用
// 第一步yarn add react-quil
export default function Publish() {
  const formRef = useRef(null)
  const history = useHistory()
  const dispatch = useDispatch()
  // 2.const channels = useChannels();
  const { id } = useParams()

  // 获取文章详情
  useEffect(() => {
    if (!id) return
    // 如果有id，代表是修改
    dispatch(getArticleInfo(id)).then((res) => {
      console.log(res)
      formRef.current.setFieldsValue({
        ...res,
        type: res.cover.type,
      })
      setType(res.cover.type)
      const list = res.cover.images.map((item) => {
        return {
          url: item,
        }
      })
      setFileList(list)
      fileRef.current = list
    })
  }, [id, dispatch])

  const add = async (draft, values) => {
    const images = fileList.map((item) => {
      if (item.url) {
        return item.url
      } else {
        return item.response.data.url
      }
    })
    const data = {
      ...values,
      cover: {
        type: type,
        images: images,
      },
    }
    if (id) {
      // 修改
      await dispatch(
        editArticle(draft, {
          ...data,
          id,
        })
      )
    } else {
      // 新增
      await dispatch(addArticle(draft, data))
    }
    message.success('操作成功')
    history.push('/home/article')
  }
  const onFinish = async (values) => {
    add(false, values)
  }

  const addDraft = async () => {
    const values = await formRef.current.validateFields()
    add(true, values)
  }
  const [fileList, setFileList] = useState([])
  const fileRef = useRef(fileList)
  // 控制type属性
  const [type, setType] = useState(1)
  const [isVisible, setIsVisible] = useState(false)
  const [preview, setPreview] = useState('')

  const onTypeChange = (e) => {
    const count = e.target.value
    setType(count)
    // 注意type是异步的，这里不能写type,应该用e.target.value*****
    // 切换radio的时候，去拿的是fileRef，fileRef不变，变的是fileList，slice不改变数组，就能做到3-》1，1-》3,的时候数据3个还在。
    setFileList(fileRef.current.slice(0, count))
  }
  // 上传onChange拿到的是e,文档里面写的是结构后的file和fileList
  const onChange = ({ fileList }) => {
    // 图片在变化
    setFileList(fileList)
    // 上传后存储起来，这个额数据不变
    fileRef.current = fileList
    // 当切换单图 三图的时候，触发下面的图片数量的校验
    formRef.current.validateFields(['type'])
  }

  const onPreview = (file) => {
    setIsVisible(true)
    setPreview(file.url || file.response.data.url)
  }
  return (
    <div className={styles.root}>
      <Card
        title={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link to="/home">首页</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{id ? '编辑' : '发布'}文章</Breadcrumb.Item>
          </Breadcrumb>
        }
      >
        {/* wrapperCol是内容的宽度 */}
        {/* validateTrigger可以给form,也可以单个给form.item */}
        <Form
          ref={formRef}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          size="large"
          onFinish={onFinish}
          initialValues={{ content: '', type: type }}
          validateTrigger={['onBlur', 'onChange']}
        >
          <Form.Item
            label="标题"
            name="title"
            // validateTrigger={['onBlur', 'onChange']}
            rules={[
              {
                required: true,
                message: '标题不能为空',
              },
            ]}
          >
            <Input
              placeholder="请输入文章的标题"
              style={{ width: 400 }}
            ></Input>
          </Form.Item>
          <Form.Item
            label="频道"
            name="channel_id"
            rules={[
              {
                required: true,
                message: '频道不能为空',
              },
            ]}
          >
            {/*3.封装技巧：如果是数据是公共的，下拉框或者表格都是用这数据，那么可以使用自定义hooks这个是可以封装一段逻辑，里面请求数据，return数据，这个函数组件可以引入，在dom中使用 */}
            {/*     <Select
              style={{ width: 200 }}
              allowClear
              placeholder="请选择频道"
              {...props}
            >
              {channels.map((item) => (
                <Select.Option value={item.id} key={item.id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select> */}
            {/* 如果是dom都是一样的，可以封装成一个组件 */}
            <Channel></Channel>
          </Form.Item>
          {/* Form.Item组件的值只有在最后提交的时候才会被收集，所以需要使用Form.Item组件的name属性，来指定收集的key，但是我们需要切换就拿到数据，这个时候就可以自定义，就像upload组件一样，自己定义一个数据，去set */}
          {/* Form.Item写了一个name,就相当于是给了一个value和onChange，去除name属性，自己提供radio的value和onChange */}
          {/* 方式2：如果不希望最后提交的时候自己拿着radio的数据自己去校验，那么可以使用Form.Item组件的name属性，使用form自带的校验的功能  */}
          {/* 注意是切换radio的时候有校验，但upload的时候，没有校验，所以我们还需要再上传和删除图片的时候再加校验 */}
          <Form.Item
            label="封面"
            name="type"
            rules={[
              {
                validator(_, value) {
                  if (fileList.length !== value) {
                    return Promise.reject(new Error(`请上传${value}张图片`))
                  } else {
                    return Promise.resolve()
                  }
                },
              },
            ]}
          >
            <Radio.Group value={type} onChange={onTypeChange}>
              <Radio value={1}>单图</Radio>
              <Radio value={3}>三图</Radio>
              <Radio value={0}>无图</Radio>
            </Radio.Group>
          </Form.Item>
          {type > 0 && (
            // 一个    Form.Item不能放多个值，所以upload要单独放在一个form.item中,Form组件会收集表单数据，但是upload组件没有value和onChange，
            // 是没有这两个属性的《Upload value="" onChange=""》，Form收集的是有value属性的表单控件
            // 所以需要自定义,upload组件是通过fileList来控制上传的图片,所以我们自己定义了一个fileList数据
            <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
              {/* 
              fileList: 控制上传的图片
              action: 上传的地址
              name: 上传的文件的名字 默认file
              自动发送请求的时候发的是FormData,key是file,value是图片的binary数据。upload组件的name属性就是FormData的key
            */}
              <Upload
                listType="picture-card"
                fileList={fileList}
                name="image"
                action={`${process.env.REACT_APP_URL}upload`}
                onChange={onChange}
                maxCount={type}
                onPreview={onPreview}
              >
                {fileList.length < type && <PlusOutlined />}
              </Upload>
            </Form.Item>
          )}
          <Form.Item
            label="内容"
            name="content"
            rules={[
              {
                required: true,
                message: '内容不能为空',
              },
            ]}
          >
            {/* react-quill是基于quill封装的一个react组件 */}
            {/* 第三步使用组件，引入后报warning,componentWillReceiveProps has been renamed,这个钩子函数可能会被废弃，但目前没有办法修改。组件报错：Error:You are passing the `delta` object from the `onChange`event back as `value`.You must probably want `editor.getContents()`instead.See:https://github.com/zenoamaro/react-quill#using-deltas,说明要给quill value属性，但是form组件就会给一个value属性，不用再quill 上直接加value。form组件给value的前提是给Form 一个初始值initialValues属性。 initialValues={{ content: ''}},
             */}
            <ReactQuill></ReactQuill>
          </Form.Item>
          {/* wrapperCol内容占比 */}
          <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                {id ? '编辑' : '发布'}文章
              </Button>
              <Button onClick={addDraft}>存入草稿</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
      <Modal
        width={800}
        title="图片预览"
        visible={isVisible}
        footer={null}
        onCancel={() => setIsVisible(false)}
      >
        <div style={{ textAlign: 'center' }}>
          <img src={preview} style={{ width: 600 }} alt="" />
        </div>
      </Modal>
    </div>
  )
}
