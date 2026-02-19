import { getArticleList, getNewsArticleList } from '@/store/actions/home'
import { RootState } from '@/types/store'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ArticleItem from '../ArticleItem'
import { InfiniteScroll, PullToRefresh } from 'antd-mobile'

import styles from './index.module.scss'
type Props = {
  channelId: number
}
const ArticleList = ({ channelId }: Props) => {
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(getArticleList(channelId, Date.now()))
  }, [dispatch, channelId])
  const channelArticles = useSelector(
    (state: RootState) => state.home.channelArticles
  )
  const { articles = [], timestamp } = channelArticles[channelId] || {}

  // 是否还有更多 articles.length <= 100不准确，注意因为后端接口一直返回，这里先这么处理
  const hasMore = timestamp !== null && articles.length <= 100
  // loadMore只要是一个async函数,就会返回promise结果或者没有返回结果undefined
  const loadMore = async () => {
    // loadMore这里会自动加锁，等到await结束锁才开。所以一定要加上await
    await dispatch(getArticleList(channelId, timestamp || Date.now()))
  }

  const onRefresh = async () => {
    await dispatch(getNewsArticleList(channelId, Date.now()))
  }
  return (
    <div className={styles.root}>
      {/* 文章列表中的每一项 */}
      <PullToRefresh onRefresh={onRefresh}>
        {articles.map((item) => (
          <div
            className="article-item"
            key={item.art_id}
            onClick={() => history.push(`/article/${item.art_id}`)}
          >
            <ArticleItem article={item} />
          </div>
        ))}
      </PullToRefresh>
      {/* 无限加载组件，放在最下面，只要出现就代表数据需要加载 */}
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore}></InfiniteScroll>
    </div>
  )
}

export default ArticleList
