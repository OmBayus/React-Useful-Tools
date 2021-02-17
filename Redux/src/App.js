import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment,decrement,isloggin,islogout } from "./actions"


function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.islogged)
  const dispatch = useDispatch()

  return (
  <div>
    <h1>Counter {counter}</h1>
    <button onClick={() => dispatch(increment(5))}>+</button>
    <button onClick={()=> dispatch(decrement())}>-</button>

    <h2>{(isLogged ? "Hoş Geldin Ömer" : "Giriş Yapınız")}</h2>
    <button onClick={()=> dispatch(isloggin())}>Sign in</button>
    <button onClick={()=> dispatch(islogout())}>Logout</button>
  </div>
  );
}

export default App;
