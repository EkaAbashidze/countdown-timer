import Clock from "./Components/Clock";
import Icons from "./Components/Icons";

function App() {
  

  const timerDays = 10;
  const timerHours = 10;
  const timerMinutes = 10;
  const timerSeconds = 10;
  
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