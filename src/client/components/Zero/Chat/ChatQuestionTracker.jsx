import React, { useEffect, useState, Component } from 'react'
import useForm from 'react-hook-form'
import classNames from 'classnames'
import ChatQuestion from '../ChatQuestion/ChatQuestion'
import ChatAnswer from '../ChatAnswer/ChatAnswer'
import styles from './chat.scss'

function ChatQuestionTracker(props) {
  const { question, onChange, received, suggestions } = props

  const [openAnswer, setOpenAnswer] = useState(false)

  const { register, handleSubmit } = useForm()

  useEffect(() => {
    setOpenAnswer(question.answer ? false : true)
  }, [question])

  useEffect(() => {
    setOpenAnswer(received)
  }, [received])

  const onSubmit = data => {
    const { answer } = data
    onChange && onChange({ answer, id: question.id })
  }

  const onSubmitSuggestion = data => {
    const { quickMessage } = data

    onChange && onChange({ answer: quickMessage, id: question.id })
  }

  const formClasses = classNames(styles.formWrapper, {
    [styles.open]: openAnswer
  })

  return (
    <div className={styles.questionTracker}>
      <ChatQuestion
        content={question.ask}
        time={1000}
        suggestions={question.suggestions}
        onSelect={onSubmitSuggestion}
      />

      {question.answer && <ChatAnswer item={question.answer} />}

      {!question.answer && (
        <div className={formClasses}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputGroup}>
              <input name="answer" ref={register({ required: true })} />
              <button type="submit" />
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default ChatQuestionTracker
