import React, { Component } from 'react';
import ChatSidebar from '../components/Chat/ChatSidebar';
import ChatHeader from './../components/Chat/ChatHeader';

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
