import styles from './index.module.scss'
type Props = {
  hideList: () => void
  type: '' | 'photo' | 'gender'
  onUpdate: (key: string, value: string) => void
}
const genderList = [
  { title: '男', value: '0' },
  { title: '女', value: '1' },
]
const photoList = [
  { title: '拍照', value: '0' },
  { title: '本地选择', value: '1' },
]
const EditList = ({ hideList, type, onUpdate }: Props) => {
  return (
    <div className={styles.root}>
      {type === 'gender' ? (
        <>
          <div className="list-item" onClick={() => onUpdate('gender', '0')}>
            男
          </div>
          <div className="list-item" onClick={() => onUpdate('gender', '1')}>
            女
          </div>
        </>
      ) : (
        <>
          <div className="list-item">拍照</div>
          <div className="list-item" onClick={() => onUpdate('photo', '1')}>
            本地选择
          </div>
        </>
      )}

      <div className="list-item" onClick={hideList}>
        取消
      </div>
    </div>
  )
}

export default EditList
