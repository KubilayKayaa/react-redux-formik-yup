import React from "react";
import { connect } from "react-redux";
import { deleteUser } from "../store/actions";

const Users = (props) => {
  return (
    <ul className="list-group mx-3 my-3">
      {props.users.map((user) => (
        <li
          className="list-group-item d-flex align-items-center justify-content-between"
          key={user.id}
        >
          <span>{user.firstName}</span>
          <button
            className="btn btn-danger shadow-none mx-3"
            onClick={() => props.deleteUser(user.id)}
          >
            Delete User
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { deleteUser })(Users);
