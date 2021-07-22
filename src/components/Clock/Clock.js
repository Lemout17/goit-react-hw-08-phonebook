import { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const clockIterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(clockIterval);
    };
  }, []);

  return (
    <div>
      <p> Current time: {time.toLocaleTimeString()}</p>
    </div>
  );
}
