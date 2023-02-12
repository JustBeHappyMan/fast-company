import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { paginate } from '../utils/paginate';
import Pagination from './pagination';
import User from './user';

const Users = ({ users, ...rest }) => {
  const count = users.length;
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const userCrop = paginate(users, currentPage, pageSize);

  return (
    <React.Fragment>
      {count > 0 && (
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
            {userCrop.map((user) => (
              <User key={user._id} {...rest} {...user} />
            ))}
          </tbody>
        </table>
      )}

      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </React.Fragment>
  );
};

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object)
};

export default Users;
