import React, { useReducer } from 'react';
import reducer from './reducer';

const SignUp = () => {

  const [state, dispatch] = useReducer(reducer, {
    name: '',
    password : '',
  })

  const handleChange = ({target: {name, value}}) => {
    
    dispatch({name, value});
  }

  return (
    <form>
      <input type='text' name='name' value={state.name} onChange={handleChange} />
      <input type='text' name='password' value={state.password} onChange={handleChange} />
    </form>
  );
}

export default SignUp;
