import { useReducer } from "react";

const reducer = (state, action) => {
  console.log(state, action);
  // if (action.type === "dec") return state - 1;
  // if (action.type === "inc") return state + 1;
  // if (action.type === "setCount") return action.payload;
  // if (action.type === "reset") return 0;
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return { count: 0, step: 0 };
    default:
      throw new Error("Unknowm action");
  }
};

function DateCounter() {
  // const [step, setStep] = useState(1);
  const iniatialState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, iniatialState);
  const { count, step } = state;
  //UseRedducer

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  console.log(date);
  const dec = function () {
    dispatch({ type: "dec" });
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({ type: "inc" });
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    // setCount(0);
    dispatch({ type: "reset" });
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
