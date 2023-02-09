import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const renderTable = (users) => {
    if (users.length) {
      return (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  {user.qualities.map((quality) => (
                    <span
                      key={quality._id}
                      className={["badge", "mx-1", `bg-${quality.color}`].join(
                        " "
                      )}
                    >
                      {quality.name}
                    </span>
                  ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}/5</td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  };

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const renderPhrase = (number) => {
    if (number > 0) {
      return (
        <h2>
          <span className="badge bg-primary">
            {`${number} человек${
              [2, 3, 4].includes(number) ? "а" : ""
            } тусанет с тобой сегодня`}
          </span>
        </h2>
      );
    } else {
      return (
        <h2>
          <span className="badge bg-danger">{"Никто с тобой не тусанет"}</span>
        </h2>
      );
    }
  };

  return (
    <>
      {renderPhrase(users.length)}
      {renderTable(users)}
    </>
  );
};

export default Users;
