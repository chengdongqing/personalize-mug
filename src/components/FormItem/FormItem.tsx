import { ReactNode } from 'react'
import styles from './FormItem.module.css'

export default function FormItem(props: {
  label: string
  required?: boolean
  children?: ReactNode
}) {
  return (
    <div className={styles.form_item}>
      <div className={styles.label}>
        <span>{props.label}</span>
        {props.required && <span className={styles.required}>*</span>}
      </div>
      {props.children}
    </div>
  )
}
