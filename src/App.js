import { useEffect, useState } from "react";
import Clock from "./Components/Clock";
import Icons from "./Components/Icons";
import styled from "styled-components";
import stars from "./images/bg-stars.svg"

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
    <Wrapper>
      <Clock
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
      <Icons />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: url(${stars});
`;