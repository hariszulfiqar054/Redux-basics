import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increament, decreament, isLogged } from "./action/counterAction";
import { getData } from "./action/getUsersAction";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state?.counter?.counter);
  const isLog = useSelector((state) => state?.counter?.isLogged);
  const isLoading = useSelector((state) => state?.getUser?.isLoading);
  const error = useSelector((state) => state?.getUser?.error);
  const data = useSelector((state) => state?.getUser?.data);

  useEffect(() => {
    dispatch(getData());
  }, []);

  const onHandleIncreaase = () => {
    dispatch(increament(5));
  };

  const onHandleDecreament = () => {
    if (counter > 0) dispatch(decreament());
  };

  const handleIsLogged = () => {
    dispatch(isLogged());
  };

  const onGetData = () => {
    dispatch(getData());
  };
  return (
    <div className="App">
      {isLog ? <h1>{counter}</h1> : <h1>Plz log in</h1>}

      <button onClick={onHandleIncreaase}>+</button>
      <button onClick={onHandleDecreament}>-</button>
      <button onClick={handleIsLogged}>Data show</button>
      <div>
        <button onClick={onGetData}>Get data</button>
      </div>
      {isLoading && data?.length === 0 ? (
        <div>....Loading</div>
      ) : (
        data?.map((user, i) => (
          <div key={i}>
            <h1>
              {user?.name} id : {user?.id}
            </h1>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
