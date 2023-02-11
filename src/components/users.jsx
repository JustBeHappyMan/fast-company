import React, { useState } from "react";
import User from "./user";
import api from "../api/api";

import SearchStatus from "./searchStatus";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user._id !== id));
  };

  const handleToggleBookmark = (id) => {
    setUsers(
      users.map((user) => {
        user._id === id && (user.bookmark = !user.bookmark);

        return user;
      })
    );
  };

  return (
    <React.Fragment>
      <SearchStatus length={users.length} />
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User
                key={user._id}
                handleDelete={handleDelete}
                handleToggleBookmark={handleToggleBookmark}
                {...user}
              />
            ))}
          </tbody>
        </table>
      )}
    </React.Fragment>
  );
};

export default Users;
