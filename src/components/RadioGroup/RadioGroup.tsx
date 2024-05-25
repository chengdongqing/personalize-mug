import classNames from 'classnames'
import styles from './RadioGroup.module.css'

export default function RadioGroup<T>(props: {
  options: Array<{ icon: string; value: T }>
  value: T
  onChange: (value: T) => void
}) {
  return (
    <div className={styles.radio_group}>
      {props.options.map((item) => (
        <div
          key={item.value as string}
          className={classNames(
            styles.radio,
            item.value === props.value && styles.active
          )}
          onClick={() => {
            props.onChange(item.value)
          }}
        >
          <img
            src={item.icon}
            alt=""
            className={styles.icon}
            draggable="false"
          />

          {item.value === props.value && (
            <svg
              className={styles.checkmark}
              viewBox="0 0 52 52"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.1 27.2l7.1 7.2 16.7-16.8" fill="none" />
            </svg>
          )}
        </div>
      ))}
    </div>
  )
}
