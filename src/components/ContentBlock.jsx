import React, { Fragment, useState } from "react";
import TableResponsive from "./TableResponsive";
import EmptyUserList from "./EmptyUserList";
import "./ContentBlock.css";


const ContentBlock = () => {
  const users = JSON.parse(localStorage.getItem("users"));

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
  };

  const updateUserState = e => {
    setUserState({
      ...userState,
      [e.target.name]: e.target.value
    });
  };

  const deleteUser = email => {
    let newUsers = users.filter(user => user.email !== email);
    localStorage.setItem("users", JSON.stringify(newUsers));
    window.M.toast({
      html: "The selected user has been removed",
      classes: "red darken-1"
    });
  };

  const handleClick = e => {
    e.preventDefault();

    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      password.trim() === "" ||
      email.trim() === ""
    ) {
      window.M.Toast.dismissAll();
      window.M.toast({
        html: "All the fields are required",
        classes: "red darken-1"
      });
      return;
    }

    let usersItems = JSON.stringify([...users, userState]);
    
    let userName = userState.firstName + ' ' + userState.lastName;

    setUserState({
      firstName: "",
      lastName: "",
      password: "",
      email: ""
    });

    localStorage.setItem("users", usersItems);

    window.M.toast({
      html: `The user ${userName} has been registered!`,
      classes: "light-green darken-2"
    });
  };

  const { firstName, lastName, password, email } = userState;

  return (
    <Fragment>
      <div className="container content-block">    
        <h5 className="title blue-text darken-2">User Registration</h5>
        <div className="row">         
          <div className="col m5 s12">            
            <form>
              <div className="row">
                <div className="input-field">
                  <input
                    name="firstName"
                    type="text"
                    className="validate"
                    onChange={updateUserState}
                    value={firstName}
                    placeholder="Insert your first name"
                    required
                  />
                  <label htmlFor="firstName">First Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field">
                  <input
                    name="lastName"
                    type="text"
                    className="validate"
                    onChange={updateUserState}
                    value={lastName}
                    placeholder="Insert your last name"
                    required
                  />
                  <label htmlFor="lastName">Last Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field">
                  <input
                    name="email"
                    type="email"
                    className="validate"
                    onChange={updateUserState}
                    value={email}
                    placeholder="Insert your email"
                    required
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field">
                  <input
                    name="password"
                    type="password"
                    className="validate"
                    onChange={updateUserState}
                    value={password}
                    placeholder="Insert your password"
                    required
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <div className="row">
                <button
                  className="btn waves-effect waves-light light-green darken-3"
                  type="submit"
                  name="action"
                  onClick={handleClick}
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
          <div className="col m7 s12">
            
            {users.length >= 1 ? (
              <TableResponsive
                users={users}
                deleteuser={deleteUser}
                setusers={updateUsersList}
                userslist={usersList}
              />
            ) : <EmptyUserList
                  msg="Please add a new user!" />}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ContentBlock;
