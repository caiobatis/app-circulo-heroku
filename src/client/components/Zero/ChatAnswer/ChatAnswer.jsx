import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import styles from './styles.scss'

function ChatAnswer(props) {
  const { item } = props

  const chatItemClasses = classNames(styles.chatItem)

  return (
    <div className={chatItemClasses}>
      <div className={styles.ballonActive}>
        <div>{item.text}</div>
      </div>
    </div>
  )
}

export default ChatAnswer
