import React, { Component } from 'react';
import ChatSidebar from '../components/ChatSidebar';
import ChatHeader from './../components/ChatHeader';

class PseudoChat extends Component {
  render() {
    return (
      <div>
        <ChatHeader/>
        <ChatSidebar/>
      </div>
    );
  }
}

export default PseudoChat;
