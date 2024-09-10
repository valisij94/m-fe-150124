import { useEffect, useState } from "react";

export default function SimpleTimer() {

  const [time, setTime] = useState(new Date().toISOString());

  useEffect( () => {
    const intervalId = setInterval( () => {
      console.log('Interval fired')
      setTime(new Date().toISOString());
    }, 1000 );

    const timerId = setTimeout( () => {
      console.log('Mouned!');
    }, 5000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timerId);
    }
  }, []);

  return (
    <p>Now is: {time}</p>
  )
}