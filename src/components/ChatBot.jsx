import React from 'react'
import messageLogo from '../image/messageLogo.png'

const ChatBot = () => {
  return (
    <div className=''>
        
        <button className='btn btn-success  chatBotBtn'><img src={messageLogo} alt="messageLogo" />Let's Chat</button>
    </div>
  )
}

export default ChatBot