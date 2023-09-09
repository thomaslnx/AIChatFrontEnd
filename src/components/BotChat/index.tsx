import { BiSolidBot } from 'react-icons/bi'

import { BotMessage } from '../../interfaces/index'

const BotChat: React.FC<BotMessage> = ({ message }): JSX.Element => {
  return (
    <div className="mt-2 flex w-full max-w-xs space-x-3">
      <div
        id="avatar-image"
        className="flex h-10 w-10 flex-shrink-0 place-content-center place-items-center rounded-full bg-botAvatar"
      >
        <BiSolidBot color="#ffffff" size="2em" />
      </div>

      <div>
        <div className="rounded-r-lg rounded-bl-lg bg-botChat p-3">
          <p className="text-sm text-botText">{message}</p>
        </div>
        <span className="text-xs leading-none text-gray-500">2 min ago</span>
      </div>
    </div>
  )
}

export default BotChat
