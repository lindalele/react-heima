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
/**
 * 文章管理组件
 * 用于展示和管理文章列表，包括筛选、删除、分页等功能
 */
export default function Article() {
  // 使用Redux的useDispatch和useSelector钩子获取状态和分发器
  const dispatch = useDispatch()
  // 获取文章频道列表
  const channels = useSelector((state) => state.article.channels)
  // 获取文章列表数据
  const articles = useSelector((state) => state.article.articles)
  // 使用React Router的useHistory钩子进行页面导航
  const history = useHistory()
  // 使用useRef存储筛选参数，以便在整个组件中共享和更新
  // 为了本页面中其他地方都能访问得到，使用ref
  const params = useRef({})
  // 组件挂载时获取频道列表和文章列表
  useEffect(() => {
    dispatch(getChannelList())
    dispatch(getArticleList())
  }, [dispatch])

  // 处理表单筛选的回调函数
  // 由于筛选条件变化，不需要刷新页面，所以此时可以用useRef
  const onFinish = (values) => {
    // 处理状态筛选条件
    if (values.status !== -1) {
      params.current.status = values.status
    } else {
      delete params.current.status
    }

    // 处理频道筛选条件
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
    // 点击筛选，回到第一页。从第一页开始筛选
    params.current.page = 1
    dispatch(getArticleList(params.current))
    // console.log(params.current)
  }

  // 删除比较特殊
  const del = async (id) => {
    await dispatch(delArticle(id))
    // 重新发送请求，删除完成后还是在那一页。由于使用的是ref,所以筛选条件不会丢失，还是在的。删除之后刷新是基于现有筛选条件去请求的数据
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
      {/* 地址：ant.design/components/breakcrumb-cn
       */}
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
              {/* 有两种写法，可以根据文档导入import {Select} from 'antd',后const {Option}=Select。 */}
              {/* 也可以直接写<Select.Option></Select.Option> */}

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
