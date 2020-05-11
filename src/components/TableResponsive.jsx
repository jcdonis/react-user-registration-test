import React from "react";


const TableResponsive = ({ users, deleteuser, setusers }) => {  
   
  const removeUserItem = email => {
    deleteuser(email);
    setusers();
  }
  
  
  return (
    <table>
      <caption>
        <h5 className="blue-text text-darken-2">Registered Users</h5>
      </caption>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {users.map((user, index) => {
          return (
            
            <tr key={index}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="btn-floating red btn-small"
                  onClick={() => removeUserItem(user.email)}
                >
                  <i className="tiny material-icons">clear</i>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableResponsive;
