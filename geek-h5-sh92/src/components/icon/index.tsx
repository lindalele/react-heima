import classNames from 'classnames'
type Props = {
  type: string
  onClick?: () => void
  className?: string
}

export default function Icon(props: Props) {
  return (
    // yarn add classnames
    // svg已经有一个icon类了，这里还需要加一个类，用一个库classnames,可以拼类名***
    <svg
      className={classNames('icon', props.className)}
      aria-hidden="true"
      onClick={props.onClick}
    >
      <use xlinkHref={`#${props.type}`}></use>
    </svg>
  )
}
