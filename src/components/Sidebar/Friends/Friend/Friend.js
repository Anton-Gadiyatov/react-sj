import React from 'react'
import styles from './Friend.module.css'

const Friend = (props) => {
  return (
    <div className={styles.friend}>
      <div>{props.avatar}</div>
      <div>{props.name}</div>
    </div>
  )
}

export default Friend;
