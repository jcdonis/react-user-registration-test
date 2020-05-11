import React from "react";


const TableResponsive = ({ users, deleteuser, setusers }) => {  
   
  const removeUserItem = email => {
    deleteuser(email);
    setusers();
  }
  
  
  return (
    <table>
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
                  className="btn waves-effect waves-light"
                  onClick={() => removeUserItem(user.email)}
                >
                  <i className="material-icons">delete</i>
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
