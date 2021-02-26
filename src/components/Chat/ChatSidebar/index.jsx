import React, { Component } from 'react';
import { UserContext } from '../../../contexts';

class ChatSidebar extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {(user)=> {
          return (
            <div>
              <h2>{`${user.firstName} ${user.lastName}`}</h2>
              <img src={user.imageSrcnp} alt=""/>
            </div>
          )
        }}
      </UserContext.Consumer>
    );
  }
}

export default ChatSidebar;
