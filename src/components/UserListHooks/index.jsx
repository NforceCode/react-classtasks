import { getUsers } from 'api';
import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsFetching(true);
    getUsers({})
      .then(data => setUsers(data.results))
      .catch(error => setError(error))
      .finally(setIsFetching(false))
  }, []);

  if(isFetching) {
    return <div>LOADING ...</div>
  }
  if(error) {
    return <div>error occured. Details: {error}</div>
  }

  return (
    <ol>
      {users.map(user => (
        <li key={user.login.uuid}>
          {user.name.first} {user.name.last}
        </li>
      ))}
    </ol>
  );
};

export default UserList;
