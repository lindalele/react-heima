import React, { useEffect, useRef } from 'react'
import styles from './index.module.scss'
import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  Select,
  DatePicker,
  Table,
  Tag,
  Image,
  Space,
  Popconfirm,
  message,
} from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  delArticle,
  getArticleList,
  getChannelList,
} from '@/store/actions/article'
import { useSelector } from 'react-redux'
import img from '@/assets/error.png'

const STATUS = [
  { id: -1, title: '全部', color: 'magenta' },
  { id: 0, title: '草稿', color: 'red' },
  { id: 1, title: '待审核', color: 'volcano' },
  { id: 2, title: '审核通过', color: 'lime' },
  { id: 3, title: '审核失败', color: 'gold' },
]
export default function Article() {
  const dispatch = useDispatch()
  const channels = useSelector((state) => state.article.channels)
  const articles = useSelector((state) => state.article.articles)
  const history = useHistory()
  const params = useRef({})
  useEffect(() => {
    dispatch(getChannelList())
    dispatch(getArticleList())
  }, [dispatch])

  const onFinish = (values) => {
    if (values.status !== -1) {
      params.current.status = values.status
    } else {
      delete params.current.status
    }

    params.current.channel_id = values.channel_id
    if (values.date) {
      params.current.begin_pubdate = values.date[0]
        .startOf('day')
        .format('YYYY-MM-DD HH:mm:ss')
      params.current.end_pubdate = values.date[1]
        .endOf('day')
        .format('YYYY-MM-DD HH:mm:ss')
    } else {
      delete params.current.begin_pubdate
      delete params.current.end_pubdate
    }
    // 从第一页开始筛选
    params.current.page = 1
    dispatch(getArticleList(params.current))
    // console.log(params.current)
  }

  const del = async (id) => {
    await dispatch(delArticle(id))
    // 重新发送请求
    await dispatch(getArticleList(params.current))
    message.success('删除成功')
  }

  const columns = [
    {
      title: '封面',
      dataIndex: 'cover',
      render(cover) {
        if (cover.type === 0) {
          return <Image width={200} height={150} src={img}></Image>
        } else {
          return (
            <Image
              width={200}
              height={150}
              src={cover.images[0]}
              fallback={img}
            ></Image>
          )
        }
      },
    },
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: (status) => {
        const obj = STATUS.find((item) => item.id === status)
        return <Tag color={obj.color}>{obj.title}</Tag>
      },
    },
    {
      title: '发布时间',
      dataIndex: 'pubdate',
    },
    {
      title: '阅读数',
      dataIndex: 'read_count',
    },
    {
      title: '评论数',
      dataIndex: 'comment_count',
    },
    {
      title: '点赞数',
      dataIndex: 'like_count',
    },
    {
      title: '操作',
      dataIndex: 'id',
      render(id) {
        return (
          <Space>
            <Button
              shape="circle"
              type="primary"
              icon={<EditOutlined />}
              onClick={() => history.push(`/home/publish/${id}`)}
            />
            <Popconfirm title="确定要删除该文章吗？" onConfirm={() => del(id)}>
              <Button shape="circle" type="danger" icon={<DeleteOutlined />} />
            </Popconfirm>
          </Space>
        )
      },
    },
  ]

  return (
    <div className={styles.root}>
      <Card
        title={
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/home">首页</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>内容管理</Breadcrumb.Item>
          </Breadcrumb>
        }
      >
        {/* 表单 */}
        <Form initialValues={{ status: -1 }} onFinish={onFinish}>
          <Form.Item label="状态" name="status">
            <Radio.Group>
              {STATUS.map((item) => (
                <Radio key={item.id} value={item.id}>
                  {item.title}
                </Radio>
              ))}
            </Radio.Group>
          </Form.Item>
          <Form.Item label="频道" name="channel_id">
            <Select style={{ width: 200 }} allowClear placeholder="请选择频道">
              {channels.map((item) => (
                <Select.Option value={item.id} key={item.id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="日期" name="date">
            <DatePicker.RangePicker></DatePicker.RangePicker>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              筛选
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Card
        title={`根据筛选条件共查询到${articles.total_count}条结果:`}
        style={{ marginTop: 10 }}
      >
        {/* 如果数据中有key,Table组件会自动那key作为这一行唯一键；如果数据中没有key,那么 需要在Table中加“rowKey”属性。 rowKey=“字符串会自动从数据源中拿到数据中的id作为唯一值，rowKey也可以写成={函数} */}
        <Table
          rowKey={(record) => record.id}
          dataSource={articles.results}
          columns={columns}
          pagination={{
            position: ['bottomCenter'],
            total: articles.total_count,
            pageSize: articles.per_page,
            current: articles.page,
            onChange(page, pageSize) {
              if (pageSize !== articles.per_page) {
                // 修改的是每页的条数
                params.current.per_page = pageSize
                params.current.page = 1
              } else {
                // 修改的是当前页
                params.current.page = page
              }
              dispatch(getArticleList(params.current))
            },
          }}
        />
      </Card>
    </div>
  )
}
