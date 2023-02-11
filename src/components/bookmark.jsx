import React from "react";
import PropTypes from "prop-types";
import { Star, StarFill } from "react-bootstrap-icons";

const Bookmark = ({ status }) => {
  return status ? <StarFill /> : <Star />;
};

Bookmark.propTypes = {
  status: PropTypes.bool.isRequired,
};

export default Bookmark;
