import classNames from 'classnames'
import styles from './ColorRadio.module.css'

export default function ColorRadio(props: {
  options: Array<{ value: string; color: string }>
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className={styles.color_radio}>
      {props.options.map((item) => (
        <div
          key={item.value}
          className={classNames(
            styles.color_item,
            item.value === props.value && styles.active
          )}
          onClick={() => {
            props.onChange(item.value)
          }}
        >
          <div
            style={{ backgroundColor: item.color }}
            className={styles.inner}
          />
        </div>
      ))}
    </div>
  )
}
