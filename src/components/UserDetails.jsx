import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function UserDetails() {
  const { id } = useParams();
  const [user] = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  return (
    <div>
      <h1>User Details</h1>
      {user && (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <p><strong>Company:</strong> {user.company?.name}</p>
          <p><strong>Address:</strong> {user.address?.street}, {user.address?.city}</p>
        </div>
      )}
    </div>
  );
}

export default UserDetails;