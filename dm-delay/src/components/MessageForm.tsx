import { useState } from "react";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const MessageForm = () => {

  const [message, setMessage] = useState<string>("");
  const [delay, setDelay] = useState<number>(10);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
  const [sentMessage, setSentMessage] = useState<string>("");

  const handleSend = () => {

    setIsSending(true);

    const id = setTimeout(() => {
      setSentMessage(message);
      setMessage("");
      setIsSending(false);
    }, delay * 1000);

    setTimerId(id);
  }

  const handleCancel = () => {
    if (timerId) {
      clearTimeout(timerId);
      setTimerId(null);
      setIsSending(false);
    }
  }

  return (
    <>
      <div className="w-2xs mx-auto p-4 bg-white border shadow-md rounded-lg space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">DM Delay Button</h2>

        <Textarea
          placeholder="Enter your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Input
          type="number"
          value={delay}
          onChange={(e) => setDelay(Number(e.target.value))}
          disabled={isSending}
        />

        {!isSending ? (
          <Button className="w-full" onClick={handleSend}>
            Send With Delay
          </Button>
        ) : (
          <Button className="w-full" variant="destructive" onClick={handleCancel}>
            Cancel Sending
          </Button>
        )}

        {sentMessage && (
          <div className="bg-green-200 text-green-700 p-4 rounded-lg mt-4 border">
            <p className="font-semibold">Message Sent: {sentMessage}</p>
          </div>
        )}


      </div>
    </>
  )
}

export default MessageForm