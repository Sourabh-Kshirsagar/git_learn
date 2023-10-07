import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };
    // it is the js thing to check the window is online or offline

    const handleOffline = () => {
      setIsOnline(false);
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Here we clean up the code we have to clean up the event Listner from the code when we go anywhere form the page
    // for this we are using the return fn as a unmounting cycle to remove the listner
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline;
};
export default useOnline;

// IN this way online offline works
