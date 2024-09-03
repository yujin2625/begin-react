import React from "react";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
    </div>
  );
}

function UserList({ users }) {
  return (
    <>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}

      {/* {users.map((user, index) => (
        <User user={user} key={index} />
      ))} */}
      <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} />
    </>
  );
}

export default UserList;
