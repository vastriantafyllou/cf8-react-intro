import CounterButton from './CounterButton'
import {useState} from "react";

type CounterState = {
  count: number;
  time: string;
  lastAction: string;
}

const CounterAdvanced = () => {

  const [state, setState] = useState<CounterState>({
    count: 0,
    time: "",
    lastAction: "",
  })

  const getCurrentTime = () => new Date().toLocaleTimeString()

  const increaseCount = () => {
    setState({
      count: state.count + 1,
      time: getCurrentTime(),
      lastAction: "Increase",
    })
  }

  const decreaseCount = () => {
    if (state.count > 0) {
      setState({
        count: state.count - 1,
        time: getCurrentTime(),
        lastAction: "Decrease",
      })
    }
  }

  const resetCount = () => {
    if (state.count > 0) {
      setState({
        count: 0,
        time: getCurrentTime(),
        lastAction: "Reset",
      })
    }
  }

  return (
    <>
      <h1 className="text-center text-2xl my-12">Count is <strong>{state.count}</strong></h1>
      <div className="text-center space-x-4">
        <CounterButton
          onClick={increaseCount}
          label="Increase"
        />

        <CounterButton
          onClick={decreaseCount}
          label="Decrease"
          disabled={state.count === 0}
          addClasses="bg-cf-dark-gray disabled:bg-cf-gray"

        />
        <CounterButton
          onClick={resetCount}
          label="Reset"
          disabled={state.count === 0}
          addClasses="bg-cf-dark-gray disabled:bg-red-500"
        />
      </div>
      <p className="text-center text-cf-gray pt-8">
        Last Change: <strong>{state.lastAction || "-"}</strong> at <strong>{state.time || "-"}</strong>
      </p>
    </>
  )
}

export default CounterAdvanced