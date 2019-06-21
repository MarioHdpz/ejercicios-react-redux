import React from "react";
import "./App.css";
import WhiteList from "./components/WhiteList";
import BlackList from "./components/BlackList";
import Form from './components/Form';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { whiteList, blackList } from './store/reducers';

const store = createStore(whiteList)

function App() {
  return (
    <Provider store={store}>
      <Form />
      <WhiteList />
      <BlackList />
    </Provider>
  );
}

export default App;
