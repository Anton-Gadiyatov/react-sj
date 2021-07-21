import React from 'react'
import styles from './Friend.module.css'

const Friend = (props) => {
  return (
    <div>
      <div>{props.avatar}</div>
      <div>{props.name}</div>
    </div>
  )
}

export default Friend;
