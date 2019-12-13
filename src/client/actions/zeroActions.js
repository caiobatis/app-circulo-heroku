import { RECEIVE_CHAT, FETCH_CHAT } from '../constants/actionTypes'
import { setChatResource } from '../lib/api'
import { botChatSerialize } from '../lib/serializers'

const mock1 = {
  id: 1,
  ask: [
    {
      text: 'Olá 🤙',
      id: 1
    },
    {
      text: 'Como vai?',
      id: 2
    }
  ],
  answer: ''
}

const mock2 = {
  id: 2,
  ask: [
    {
      text: 'quer pagar quanto?',
      id: 2
    }
  ],
  answer: ''
}

export const fetchTodos = (value = true) => ({
  type: FETCH_CHAT,
  payload: value
})

export const receiveChat = (values, questions) => ({
  type: RECEIVE_CHAT,
  payload: values,
  questions
})

export const setChat = (answer = 'Olá', questions) => dispatch => {
  dispatch(fetchTodos(false))

  setChatResource({ message: answer })
    .then(res => {
      const data = botChatSerialize(res.data)

      dispatch(receiveChat(data, questions))

      setTimeout(() => {
        dispatch(fetchTodos())
      }, 1000)
    })
    .catch(e => console.log(e))
}
