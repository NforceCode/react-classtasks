import React, { Component } from 'react';
import { getUsers } from '../../api';
import Spinner from '../Spinner';

class UserLoader extends Component {
  constructor (props) {
    super(props);
    this.state = {
      users: [],
      isFetching: true,
      isError: null,
      currentPage: 1,
    };
  }

  componentDidMount () {
    this.load();
  }

  componentDidUpdate (prevProps, prevState) {
    const { currentPage } = this.state;

    if (prevState.currentPage !== currentPage) {
      this.load();
    }
  }

  changePage =(direction) => {
    const {currentPage} = this.state;
    if(direction === '+') {
      this.setState({currentPage: currentPage + 1});
    } else if (direction ==='-' && currentPage > 1) {
      this.setState({currentPage: currentPage - 1});
    }
  }

  load = () => {
    const { currentPage } = this.state;

    getUsers({ page: currentPage })
      .then(users => this.setState({ users: users.results }))
      .catch(error => this.setState({ error }))
      .finally(this.setState({ isFetching: false }));
  };

  render () {
    const { users, isFetching, isError } = this.state;
    return (
      <div>
        <h1>USER LIST</h1>
        <button onClick={()=>{this.changePage('-')}}>Previous page</button>
        <button onClick={()=>{this.changePage('+')}}>Next page</button>
        {isFetching && <Spinner />}
        {isError && <div>Error happened</div>}
        <ul>
          {users.map(user => (
            <li key={user.login.uuid}>{JSON.stringify(user, null, 4)}</li>
          ))}
        </ul>
        {/* <Spinner /> */}
      </div>
    );
  }
}

export default UserLoader;
