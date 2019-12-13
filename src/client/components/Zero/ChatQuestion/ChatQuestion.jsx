import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import styles from './styles.scss'

function ChatQuestion(props) {
  const { content, time = 2000, suggestions = [], onSelect } = props

  const [initialItem, setInitialItem] = useState(false)
  const [isVisible, setVisible] = useState(false)

  const questionClasses = classNames(styles.question)

  const ballonClasses = classNames(styles.ballon, {
    [styles.visible]: isVisible && initialItem
  })

  const _initial = content.find((_, i) => i === 0)
  const _content = content.filter((_, i) => i !== 0)

  useEffect(() => {
    setTimeout(() => {
      setInitialItem(_initial)
    }, time)
  }, [_initial])

  useEffect(() => {
    setVisible(true)
  }, [initialItem])

  const points = (
    <div className={styles.points}>
      <span />
      <span />
      <span />
    </div>
  )

  return (
    <div className={questionClasses}>
      <div className={styles.ballonActive}>
        {initialItem ? <div>{initialItem.text}</div> : points}
      </div>
      {_content.map(item => (
        <div className={ballonClasses} key={item.id}>
          {item.text}
        </div>
      ))}
      <div className={styles.suggestions}>
        {suggestions &&
          suggestions.map(suggestion => {
            const suggestionClasses = classNames(styles.suggestion, {
              [styles.visible]: initialItem
            })

            return (
              <div
                onClick={() => onSelect(suggestion)}
                className={suggestionClasses}
                key={suggestion.id}
              >
                <img src={suggestion.image} alt="" />
                <div className={styles.text}>{suggestion.name}</div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default ChatQuestion
