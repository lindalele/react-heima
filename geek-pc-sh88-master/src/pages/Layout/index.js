import React, { useEffect } from 'react'
import styles from './index.module.scss'
import { Layout, Menu, message, Popconfirm } from 'antd'
import {
  LogoutOutlined,
  HomeOutlined,
  HddOutlined,
  EditOutlined
} from '@ant-design/icons'
import { Route, Link, Switch, useLocation, useHistory } from 'react-router-dom'
// import Home from '../Home'
// import Article from '../Article'
// import Publish from '../Publish'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo } from '@/store/actions/user'
import { logout } from '@/store/actions/login'

const Home = React.lazy(() => import('@/pages/Home'))
const Article = React.lazy(() => import('@/pages/Article'))
const Publish = React.lazy(() => import('@/pages/Publish'))

const { Header, Sider } = Layout

export default function MyLayout() {
  const location = useLocation()
  let pathname = location.pathname
  if (pathname.startsWith('/home/publish')) {
    pathname = '/home/publish'
  }
  const user = useSelector((state) => state.user)
  const history = useHistory()

  // console.log(user)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserInfo())
  }, [dispatch])

  const onConfirm = () => {
    // 清除token
    dispatch(logout())

    // 跳转到登录页
    history.push('/login')
    // 提示消息
    message.success('退出成功', 1)
  }

  return (
    <div className={styles.root}>
      <Layout>
        <Header className="header">
          <div className="logo" />
          {/* 右侧内容 */}
          <div className="profile">
            <span>{user.name}</span>
            <Popconfirm
              title="你确定要退出本系统吗?"
              okText="确定"
              cancelText="取消"
              placement="bottomRight"
              onConfirm={onConfirm}
            >
              <span>
                <LogoutOutlined></LogoutOutlined> 退出
              </span>
            </Popconfirm>
          </div>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            {/* selectedKeys: 根据值进行高亮的切换 */}
            {/* defaultSelectedKeys: 设置默认的高亮 */}
            <Menu
              mode="inline"
              theme="dark"
              selectedKeys={[pathname]}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item icon={<HomeOutlined />} key="/home">
                <Link to="/home">数据概览</Link>
              </Menu.Item>
              <Menu.Item icon={<HddOutlined />} key="/home/article">
                <Link to="/home/article">内容管理</Link>
              </Menu.Item>
              <Menu.Item icon={<EditOutlined />} key="/home/publish">
                <Link to="/home/publish">发布文章</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: 20, overflow: 'auto' }}>
            <Switch>
              <Route exact path="/home" component={Home}></Route>
              <Route path="/home/article" component={Article}></Route>
              {/* 添加文章 */}
              <Route
                exact
                path="/home/publish"
                key="add"
                component={Publish}
              ></Route>
              {/* 修改文章 */}
              <Route
                path="/home/publish/:id"
                key="edit"
                component={Publish}
              ></Route>
            </Switch>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}
