import React from 'react';
import './App.css';
import Counter from './components/Counter';
import { createStore } from  'redux';
import { Provider } from 'react-redux';

const initialState = 0

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'add':
      // Aquí puedes modificar el estado antes de regresarlo
      return state;
    case 'substract':
      // Aquí puedes modificar el estado antes de regresarlo
      return state;
    default:
      return state;
  }
}

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default App;
