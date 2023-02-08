import React from "react";

function User({ user }) {
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <br />
    </div>
  );
}

export default User;
