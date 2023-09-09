import { BiSolidUser } from 'react-icons/bi'
import { UserMessage } from '../../interfaces/index'

const UserChat: React.FC<UserMessage> = ({ message }): JSX.Element => {
  return (
    <div className="ml-auto mt-2 flex w-full max-w-xs justify-end space-x-3">
      <div>
        <div className="rounded-l-lg rounded-br-lg bg-userChat p-3 text-white">
          <p className="text-sm text-userText">{message}</p>
        </div>
        <span className="text-xs leading-none text-gray-500">3 min ago</span>
      </div>
      <div className="flex h-10 w-10 flex-shrink-0 place-content-center place-items-center rounded-full bg-gray-300">
        <BiSolidUser color="#ffffff" size="2em" />
      </div>
    </div>
  )
}

export default UserChat
