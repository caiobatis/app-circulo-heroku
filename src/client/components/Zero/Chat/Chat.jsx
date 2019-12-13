import React, { useEffect, useState, Component } from 'react'
import classNames from 'classnames'
import useForm from 'react-hook-form'
import ChatQuestionTracker from './ChatQuestionTracker'
import styles from './chat.scss'

class Chat extends Component {
  constructor(props) {
    super(props)

    this.handlerSubmit = this.handlerSubmit.bind(this)
  }

  state = {
    _questions: []
  }

  handlerSubmit(data) {
    const { onChange, questions } = this.props

    const { answer, id } = data

    questions.map((question, i) => {
      if (question.id === id)
        question.answer = {
          text: answer
        }
      return question
    })

    // setQuestions(newQuestions);
    onChange && onChange(answer, questions)
  }

  render() {
    const { onChange, questions, ...rest } = this.props

    return (
      <div>
        <div className={styles.chatWrapper}>
          {questions.map(question => {
            return (
              <ChatQuestionTracker
                question={question}
                onChange={this.handlerSubmit}
                key={question.id}
                {...rest}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Chat
