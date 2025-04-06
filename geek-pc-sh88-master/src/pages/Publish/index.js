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
  Modal
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link, useHistory, useParams } from 'react-router-dom'
import Channel from '@/components/Channel'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useDispatch } from 'react-redux'
import {
  addArticle,
  editArticle,
  getArticleInfo
} from '@/store/actions/article'

export default function Publish() {
  const formRef = useRef(null)
  const history = useHistory()
  const dispatch = useDispatch()

  const { id } = useParams()

  // 获取文章详情
  useEffect(() => {
    if (!id) return
    // 如果有id，代表是修改
    dispatch(getArticleInfo(id)).then((res) => {
      console.log(res)
      formRef.current.setFieldsValue({
        ...res,
        type: res.cover.type
      })
      setType(res.cover.type)
      const list = res.cover.images.map((item) => {
        return {
          url: item
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
        images: images
      }
    }
    if (id) {
      // 修改
      await dispatch(
        editArticle(draft, {
          ...data,
          id
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
    setFileList(fileRef.current.slice(0, count))
  }
  const onChange = ({ fileList }) => {
    // 图片在变化
    setFileList(fileList)
    fileRef.current = fileList
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
            rules={[
              {
                required: true,
                message: '标题不能为空'
              }
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
                message: '频道不能为空'
              }
            ]}
          >
            <Channel></Channel>
          </Form.Item>
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
                }
              }
            ]}
          >
            <Radio.Group value={type} onChange={onTypeChange}>
              <Radio value={1}>单图</Radio>
              <Radio value={3}>三图</Radio>
              <Radio value={0}>无图</Radio>
            </Radio.Group>
          </Form.Item>
          {type > 0 && (
            <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
              {/* 
              fileList: 控制上传的图片
              action: 上传的地址
              name: 上传的文件的名字 默认file
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
                message: '内容不能为空'
              }
            ]}
          >
            <ReactQuill></ReactQuill>
          </Form.Item>
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
