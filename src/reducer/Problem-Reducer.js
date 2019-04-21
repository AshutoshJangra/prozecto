const INIT_STATE = {
  problems: {
    data: []
  },
  rental: {
    data: {}
  }
};

export const problemReducer = (state = INIT_STATE.problems, action) => {
  switch (action.type) {
    case "FETCH_PROBLEMS_SUCCESS":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const selectedRentalReducer = (state = INIT_STATE.rental, action) => {
  switch (action.type) {
    case "FETCH_RENTAL_BY_ID_INIT":
      return { ...state, data: {} };
    case "FETCH_RENTAL_BY_ID_SUCCESS":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
