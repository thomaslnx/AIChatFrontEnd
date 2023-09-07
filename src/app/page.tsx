export default function Home() {
  return (
    <main
      id="main"
      className="flex min-h-screen w-screen flex-col items-center justify-center bg-main p-10 text-gray-800"
    >
      <div
        id="ia-chat-window"
        className="flex w-full max-w-xl flex-grow flex-col overflow-hidden rounded-lg bg-white shadow-xl"
      >
        <div className="flex h-0 flex-grow flex-col overflow-auto p-4">
          <div className="mt-2 flex w-full max-w-xs space-x-3">
            <div
              id="avatar-image"
              className="h-10 w-10 flex-shrink-0 rounded-full bg-botAvatar"
            ></div>

            <div>
              <div className="rounded-r-lg rounded-bl-lg bg-botChat p-3">
                <p className="text-sm text-botText">
                  Snippet of the IA chat text
                </p>
              </div>
              <span className="text-xs leading-none text-gray-500">
                2 min ago
              </span>
            </div>
          </div>

          <div className="ml-auto mt-2 flex w-full max-w-xs justify-end space-x-3">
            <div>
              <div className="rounded-l-lg rounded-br-lg bg-userChat p-3 text-white">
                <p className="text-sm text-userText">
                  Snippet of customer user chat text
                </p>
              </div>
              <span className="text-xs leading-none text-gray-500">
                3 min ago
              </span>
            </div>
            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"></div>
          </div>
        </div>
        <div className="flex flex-col bg-inputText p-4">
          <input
            type="text"
            className="flex h-10 w-full items-center rounded px-3 text-sm"
            placeholder="Type your message..."
          />

          <button
            className="mt-4 w-28 self-end rounded bg-sendButton text-buttonText"
            type="submit"
          >
            Send
          </button>
        </div>
      </div>
    </main>
  )
}
