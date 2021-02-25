import React, { Component } from 'react';
import './App.css';
import PseudoChat from './pages/PseudoChat';
import {UserContext} from './contexts';
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        firstName: 'Test',
        lastName: 'Testovich',
        imageSrc: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png',
      },
    };
  }

  render () {
    const {user} = this.state;
    return (
      <UserContext.Provider value={user}>
        <PseudoChat />
      </UserContext.Provider>
    );
  }
}

export default App;
