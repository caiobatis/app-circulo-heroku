import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Typist from 'react-typist'
import { setChat } from '../../../actions/zeroActions'
import Cover from '../Cover/Cover'
import Chat from '../Chat/Chat'

import styles from './style.scss'

class ZeroBot extends Component {
  constructor(props) {
    super(props)

    this.handlerChat = this.handlerChat.bind(this)
  }

  componentDidMount() {
    const { setChat } = this.props

    setChat()
  }

  handlerChat(data, id) {
    const { setChat } = this.props

    setChat(data, id)
  }

  render() {
    const { questions, received } = this.props
    return (
      <div>
        {/* <Cover center time={2000}>
          <h3>Oi 🤙</h3>
          <Typist ms={0} count={60}>
            <h1>vamos de carro zero?</h1>
          </Typist>
        </Cover> */}
        <div className={styles.botWrapper}>
          <div className={styles.container}>
            <Chat
              received={received}
              questions={questions}
              onChange={this.handlerChat}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const _state = state.chatModule.chat

  return {
    questions: _state.questions,
    received: _state.received
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ setChat }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ZeroBot)
