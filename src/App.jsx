// Components JSX
import React, { Component } from 'react';
import ContainerNote from './Components/ContainerNote.jsx';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from "./reducers/reduce";
import action from './actions/action'

const storeNote = createStore(reducer)

console.log(storeNote.getState())
storeNote.dispatch(action('hello world'))
console.log(storeNote.getState())

class App extends Component {
  render() {
    return (
      <Provider store={storeNote}>
		    <ContainerNote/>
      </Provider>
    );
  }
}

export default App;
