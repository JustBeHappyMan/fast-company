import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api/api";

function App() {
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
      <Users
        users={users}
        handleDelete={handleDelete}
        handleToggleBookmark={handleToggleBookmark}
      />
    </React.Fragment>
  );
}

export default App;
