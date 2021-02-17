import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux"
import allReducer from "./reducers/index"
import { Provider } from "react-redux"


const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )


// //STORE -> GLOBALIZED STATE

// //ACTION INCREMENT

// const increment = () =>{
//   return{
//     type: 'INCREMENT'
//   }
// }

// const decrement = () =>{
//   return{
//     type: 'DECREMENT'
//   }
// }

// //REDUCER

// const counter = (state =0,action) =>{
//   switch (action.type) {
//     case 'INCREMENT':
//       return state +1
//     case 'DECREMENT':
//       return state -1
//   }
//   // if (action.type ==='INCREMENT') {
//   //   return state +1
//   // }
//   // else if (action.type === 'DECREMENT') {
//   //   return state -1
//   // }
// }

// let store = createStore(counter)


// //Display it in the console

// store.subscribe(() => console.log(store.getState()))

// //DISPATCH

// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(decrement())






ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'));