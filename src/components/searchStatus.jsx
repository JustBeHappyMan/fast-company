import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
  if (length > 0) {
    return (
      <h2>
        <span className="badge bg-primary">
          {`${length} человек${
            [2, 3, 4].includes(length) ? "а" : ""
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

SearchStatus.propTypes = {
  length: PropTypes.number.isRequired,
};

export default SearchStatus;
