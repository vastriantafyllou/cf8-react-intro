import CounterButton from "./CounterButton.tsx";
import {useState} from "react";

const CounterWithMoreStates =() => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState("");
  const [lastAction, setLastAction] = useState("");

  const getRealTime = () => new Date().toLocaleTimeString();

  const increaseCount = () => {
    setCount(count + 1);
    setTime(getRealTime);
    setLastAction("Increase");
  }

  const decreaseCount = () => {
    if (count > 0){
      setCount(count - 1);
      setTime(getRealTime);
      setLastAction("Decrease");
    }
  }

  const resetCount = () => {
    setCount(0);
    setTime(getRealTime);
    setLastAction("Reset");
  }

  return (
    <>
      <h1 className="text-center text-2xl my-12">Count is <strong>{count}</strong></h1>
      <div className="text-center space-x-4">
        <CounterButton
          onClick={increaseCount}
          label="Increase"
        />
        <CounterButton
          onClick={decreaseCount}
          label="Decrease"
          disabled={count === 0}
        />
        <CounterButton
          onClick={resetCount}
          label="Reset"
          disabled={count === 0}
          addClasses="bg-cf-dark-red disabled:bg-red-500"
        />
      </div>
        <p className="text-center text-cf-gray pt-8">
          Last change: <strong>{lastAction || "-"}</strong> at <strong>{time || "-"}</strong></p>
    </>
  )
}

export default CounterWithMoreStates;