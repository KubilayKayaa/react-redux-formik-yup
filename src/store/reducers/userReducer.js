const INITIAL_STATE = {
  users: [],
  deletedUsers: [],
};

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default counterReducer;
