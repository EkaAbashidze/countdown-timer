import { useEffect, useState } from "react";
import Clock from "./Components/Clock";
import Icons from "./Components/Icons";

const countdownDate = new Date("Feb 10, 2023");
const now = new Date();
const distance = countdownDate - now;

function App() {
  const [timer, setTimer] = useState(distance);

  const timerDays = Math.floor(timer / (24 * 60 * 60 * 1000));

  const timerHours = Math.floor(
    (timer % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
  );

  const timerMinutes = Math.floor((timer % (60 * 60 * 1000)) / (1000 * 60));

  const timerSeconds = Math.floor((timer % (60 * 1000)) / 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((t) => t - 1000);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Clock
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
      <Icons />
    </div>
  );
}

export default App;
