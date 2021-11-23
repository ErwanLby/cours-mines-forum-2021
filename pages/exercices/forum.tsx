import type { NextPage } from 'next'
import MessagesList from '../../components/MessagesList'
import NewMessageForm from '../../components/NewMessageForm'

const Exercise4: NextPage = () => {
  return (
    <div id="forum-wrapper" className="d-flex flex-column">
      <div id="message-container" className="flex-grow-1">
        Messages reçus
        <div className="container">
        <MessagesList />
</div>
      </div>
      
      <div id="new-message-container">
        Nouveau message
        <div className="container py-3">
        <NewMessageForm />
      </div>
      </div>
      
    </div>
  )
}

export default Exercise4
