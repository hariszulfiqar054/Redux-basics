import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increament, decreament, isLogged } from "./action/counterAction";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const isLog = useSelector((state) => state.isLogged);

  const onHandleIncreaase = () => {
    dispatch(increament(5));
  };

  const onHandleDecreament = () => {
    if (counter > 0) dispatch(decreament());
  };

  const handleIsLogged = () => {
    dispatch(isLogged());
  };
  return (
    <div className="App">
      {isLog ? <h1>{counter}</h1> : <h1>Plz log in</h1>}

      <button onClick={onHandleIncreaase}>+</button>
      <button onClick={onHandleDecreament}>-</button>
      <button onClick={handleIsLogged}>Data show</button>
    </div>
  );
}

export default App;
