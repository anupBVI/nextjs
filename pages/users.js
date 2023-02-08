import React from "react";
import User from './../components/user';
let url = "https://jsonplaceholder.typicode.com/users";

function Users({ users }) {
  return (
    <>
      <h1>Users list</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        );
      })}
    </>
  );
}

export default Users;

export async function getStaticProps() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return {
    props: {
      users: data,
    },
  };
}
