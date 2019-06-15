import React from 'react';
import './App.css';
import Builder from './components/Builder';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from  'redux';
import { Provider } from 'react-redux';
import Receipt from './components/Receipt';


/* Arreglo de precios finales de cada hamburguesa */
const initialState = [15, 25]

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'addBurger':
      /** Se agregan nuevos elementos al arreglo
       * OJO: la acción debe contener una propiedad 'total'
       * que contiene información
       */
      const newState = state.concat([action.total])
      return newState;
    default:
      return state;
  }
}

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={Builder} />
        <Route exact path="/receipt" component={Receipt} />
      </BrowserRouter>
    </Provider>
  )
}

export default App;
