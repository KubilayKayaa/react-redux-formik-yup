export const addUser = (user) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};

export const deleteUser = (id) => {
  return {
    type: "DELETE_USER",
    payload: id,
  };
};

export const editUser = (id) => {
  return {
    type: "EDIT_USER",
    payload: id,
  };
};
