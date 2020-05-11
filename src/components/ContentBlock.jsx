import React, { Fragment, useState } from "react";
import TableResponsive from "./TableResponsive";
import "./ContentBlock.css";

const ContentBlock = () => {
  let users = JSON.parse(localStorage.getItem("users"));

  if (!users) {
    localStorage.setItem("users", JSON.stringify([]));
  }

  const [userState, setUserState] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: ""
  });
  
  const [usersList, setUsersList] = useState(users);
  
  const updateUsersList = () => {
    setUsersList(localStorage.getItem("users"));
  }

  const updateUserState = e => {
    setUserState({
      ...userState,
      [e.target.name]: e.target.value
    });
  };
  
 const deleteUser = email => {
    let newUsers = users.filter(user => user.email !== email);
    localStorage.setItem("users", JSON.stringify(newUsers));
  };
  

  const handleClick = e => {
    e.preventDefault();

    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      password.trim() === "" ||
      email.trim() === ""
    ) {
      return;
    }
    let user = JSON.stringify([...users, userState]);

    setUserState({
      firstName: "",
      lastName: "",
      password: "",
      email: ""
    });

    localStorage.setItem("users", user);
  };

  const { firstName, lastName, password, email } = userState;

  return (
    <Fragment>
      <div className="container content-block">
        <div className="row">
          <div className="col m5 s12">
            <form>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    placeholder="Placeholder"
                    name="firstName"
                    type="text"
                    className="validate"
                    onChange={updateUserState}
                    value={firstName}
                  />
                  <label htmlFor="firstName">First Name</label>
                </div>
                <div className="input-field col s12">
                  <input
                    name="lastName"
                    type="text"
                    className="validate"
                    onChange={updateUserState}
                    value={lastName}
                  />
                  <label htmlFor="lastName">Last Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    name="email"
                    type="email"
                    className="validate"
                    onChange={updateUserState}
                    value={email}
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    name="password"
                    type="password"
                    className="validate"
                    onChange={updateUserState}
                    value={password}
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <button
                    className="btn waves-effect waves-light"
                    type="submit"
                    name="action"
                    onClick={handleClick}
                  >
                    Add User
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col m7 s12">
            {users.length >= 1 ? <TableResponsive 
                                   users={users}
                                   deleteuser={deleteUser} 
                                   setusers={updateUsersList} 
                                   userslist={usersList} /> : null}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ContentBlock;
