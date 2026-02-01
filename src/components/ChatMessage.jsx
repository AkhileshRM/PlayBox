import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className="flex items-center shadow-sm gap-2 p-2">
      <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
          className="h-8"
        />
        <h2 className="font-bold">{name}</h2>
        <h6>{message}</h6>
    </div>
  )
}

export default ChatMessage
