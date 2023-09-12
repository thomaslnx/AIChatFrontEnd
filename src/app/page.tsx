'use client'

import { useState } from 'react'
import BotChat from '../components/BotChat'
import UserChat from '../components/UserChat'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

import { axiosInstance } from '../utils/api'

import { ChatHistory } from '../interfaces/index'

import RequestErrorToast from '../components/Toasts/RequestErrorToast'
import ResponseErrorToast from '../components/Toasts/ResponseErrorToast'

const Home: React.FC = (): JSX.Element => {
  // const [isUserTyping, setIsUserTyping] = useState<boolean>(false)
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([])
  const [userInputField, setUserInputField] = useState<string>('')
  const [, setBotCurrentMessage] = useState<string>('')

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.currentTarget))
    try {
      const currentMessages = chatHistory
      currentMessages.push({ role: 'user', content: userInputField })
      // put the user messages on state.
      setChatHistory(currentMessages)

      setUserInputField('')
      const messageTransaction = await axiosInstance.post('/chatbot', formData)
      currentMessages.push({
        role: messageTransaction.data.botAnswer.role,
        content: messageTransaction.data.botAnswer.content,
      })
      // set bot messages to state
      setChatHistory(currentMessages)

      setBotCurrentMessage(messageTransaction.data.botAnswer.content)
    } catch (error) {
      const err = error as AxiosError
      if (err.response) {
        toast.error('Tha AI API failed to response you!')
        // console.error(err.response.data)
      } else if (err.request) {
        toast.error('Your Request Have Failed!')
        // console.error(err.request)
      } else {
        console.error('Something went wrong: ', err)
      }
    }
  }

  const fillInputField = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserInputField(e.target.value)
  }

  return (
    <main
      id="main"
      className="flex min-h-screen w-screen flex-col items-center justify-center bg-main p-10 text-gray-800"
    >
      <RequestErrorToast />
      <ResponseErrorToast />
      <div
        id="ia-chat-window"
        className="flex w-full max-w-xl flex-grow flex-col overflow-hidden rounded-lg bg-white shadow-xl"
      >
        <div className="flex h-0 flex-grow flex-col overflow-auto p-4">
          {chatHistory.map((user, index) => {
            if (user.role === 'user') {
              return <UserChat key={index} message={user.content} />
            } else {
              return <BotChat key={index} message={user.content} />
            }
          })}
        </div>
        <div className="bg-inputText p-4">
          <form onSubmit={sendMessage} className="flex flex-col">
            <input
              type="text"
              className="flex h-10 w-full items-center rounded px-3 text-sm"
              placeholder="Type your message..."
              onChange={fillInputField}
              value={userInputField}
              name="message"
            />

            {userInputField.length > 0 ? (
              <button
                className="mt-4 w-28 self-end rounded bg-sendButton text-buttonText"
                type="submit"
              >
                Send
              </button>
            ) : (
              <button
                className="mt-4 w-28 self-end rounded bg-sendButton text-buttonText disabled:opacity-75"
                type="submit"
                disabled
              >
                Send
              </button>
            )}
          </form>
        </div>
      </div>
    </main>
  )
}

export default Home
