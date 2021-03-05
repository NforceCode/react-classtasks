const reducer = (state, action) => {
  const { name, value } = action;

  // const newState = {
  //   ...state,
  //   [name]: value,
  // };

  return { ...state, [name]: value };
};

export default reducer;
