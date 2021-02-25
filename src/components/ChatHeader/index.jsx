import React, { Component } from 'react';
import { UserContext } from '../../contexts';

class ChatHeader extends Component {
  render () {
    return (
      <UserContext.Consumer>
        {user => {
          return (
            <div style={{ display: 'flex', justifyContent:'space-between', border: '1px solid', padding: '20px' }}>
              <h2>{`${user.firstName} ${user.lastName}`}</h2>
              <img
                style={{ width: '100px', height: '100px', objectFit: 'cover'}}
                src={user.imageSrc}
                alt={`${user.firstName} ${user.lastName}`}
              />
            </div>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default ChatHeader;
