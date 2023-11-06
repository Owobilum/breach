import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const MAX_RETRIES = 3;

function useWebSocket(socketUrl: string, messageStoreSize = 5) {
  const socketRef = useRef<WebSocket>();
  const timeoutIdRef = useRef<NodeJS.Timeout>();
  const [messages, setMessages] = useState<unknown[]>([]);
  const [retryCount, setRetryCount] = useState(0);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const socket = new WebSocket(socketUrl);

    const handleOpen = () => {
      console.log("connection established");
    };

    const handleMessage = (event: MessageEvent) => {
      const message = JSON.parse(event.data);

      setMessages((prevMessages) => {
        const latestMessages = prevMessages.slice(0, messageStoreSize - 1); // we want to keep only as many messages as necessary in memory
        return [message, ...latestMessages];
      });
    };

    const handleClose = () => {
      console.log("connection closed");
      if (retryCount < MAX_RETRIES) {
        clearTimeout(timeoutIdRef.current);
        const delay = Math.pow(2, retryCount) * 1000;
        const id = setTimeout(() => {
          console.log(`Attempting to reconnect (retry #${retryCount + 1})...`);
          timeoutIdRef.current = id;
          setRetryCount((prev) => prev + 1);
        }, delay);
      } else {
        toast.error("WebSocket connection failed");
        setIsError(true);
      }
    };

    const handleError = () => {
      console.error("connection error");
    };

    socket.removeEventListener("open", handleOpen);
    socket.removeEventListener("message", handleMessage);
    socket.removeEventListener("close", handleClose);
    socket.removeEventListener("error", handleError);

    socket.addEventListener("open", handleOpen);
    socket.addEventListener("message", handleMessage);
    socket.addEventListener("close", handleClose);
    socket.addEventListener("error", handleError);

    socketRef.current = socket;

    return () => {
      clearTimeout(timeoutIdRef.current);
      socket.removeEventListener("open", handleOpen);
      socket.removeEventListener("message", handleMessage);
      socket.removeEventListener("close", handleClose);
      socket.removeEventListener("error", handleError);

      socket.close();
    };
  }, [messageStoreSize, retryCount, socketUrl]);

  return { socket: socketRef.current, messages, isError };
}

export { useWebSocket };
