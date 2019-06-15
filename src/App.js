import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import { createStore } from  'redux';
import { Provider } from 'react-redux';

const initialState = "Hola mundo!"

const reducer = (state=initialState, action) => {
  /** Aquí podriamos hacer algo dependiendo de la acción */
  return state
}

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <HelloWorld />
    </Provider>
  );
}

export default App;
