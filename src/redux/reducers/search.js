const searchReducer = (state = '', action) => {
  switch(action.type){
    case 'CHANGE':
      return action.value;
    default:
       return state;

  }
}
export default searchReducer;