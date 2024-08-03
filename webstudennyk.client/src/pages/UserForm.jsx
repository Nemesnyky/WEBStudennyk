import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UserForm() {
  const [user, setUser] = useState({ id: "", userName: "", email: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchUser();
    }
  }, [id]);

  const fetchUser = async () => {
    const response = await axios.get(
      `http://localhost:5139/api/AspNetUsers/${id}`
    );
    setUser(response.data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await axios.put(`http://localhost:5139/api/AspNetUsers/${id}`, user);
    } else {
      await axios.post("http://localhost:5139/api/AspNetUsers", user);
    }
    navigate("/userlist");
  };

  return (
    <div>
      <h1>{id ? "Edit User" : "Add User"}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="userName"
            value={user.userName}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </label>
        <button type="submit">{id ? "Update" : "Create"}</button>
      </form>
    </div>
  );
}

export default UserForm;
