import React, { useEffect } from 'react'
import styles from './index.module.scss'
import { Layout, Menu, message, Popconfirm } from 'antd'
import {
  LogoutOutlined,
  HomeOutlined,
  HddOutlined,
  EditOutlined,
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

// 自己的组件不嫩刚和antd组件的名称一样
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
            {/* inline是竖着的 */}
            <Menu
              mode="inline"
              theme="dark"
              selectedKeys={[pathname]}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item icon={<HomeOutlined />} key="/home">
                {/* 点击跳转，不用navlink,因为antd的菜单自带了高亮，所以link直接跳转就可以了 */}
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
            {/* 路由配置 */}
            <Switch>
              {/* exact代表:精确匹配/home */}
              {/* 登录一进来，就直接看到/home，而不是点击一下菜单才能看到/home页面 ，所以不用二级路由*/}
              {/* login是一级路由，home属于二级路由 */}
              {/* 二级路由可以和一级路由写一样，匹配到一级路由后，直接来到二级路由 */}
              {/* 这里的页面不用PrivateRoute包裹，虽然这里的 页面是需要登录才能看到的，但是home一级路由已经包裹过了，二级路由就不用了，因为想要访问二级路由，必须先访问一级路由，一级路由已经验证过了。 */}
              {/* 用PrivateRoute是必须登录才能访问的组件 */}
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
