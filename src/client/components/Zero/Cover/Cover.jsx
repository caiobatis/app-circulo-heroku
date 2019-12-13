import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import styles from './cover.scss'

function Cover(props) {
  const [visible, setVisible] = useState(true)

  const { children, center, time = 2000 } = props

  const coverClasses = classNames(styles.cover, styles.custom, {
    [styles.center]: center,
    [styles.visible]: visible
  })

  useEffect(() => {
    setTimeout(() => {
      setVisible(false)
    }, time)
  }, [])

  return (
    <div className={coverClasses}>
      <div className={styles.title}>{children}</div>
    </div>
  )
}

export default Cover
