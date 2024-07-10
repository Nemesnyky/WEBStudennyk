import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:5139/api/AspNetUsers");
    setUsers(response.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5139/api/AspNetUsers/${id}`);
    fetchUsers();
  };

  return (
    <div>
      <h1>Users</h1>
      <Link to="/userform">Add User</Link>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
                {user.userName}



            <Link to={`/userform/${user.id}`}>Edit</Link>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
