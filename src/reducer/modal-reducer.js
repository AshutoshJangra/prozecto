const INITIAL_STATE = {
   isOpen: false 
}

export const modalReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "CHANGE_STATE":
      return Object.assign({}, state, {isOpen: !INITIAL_STATE.isOpen});
    default:
      return state;
  }
};
