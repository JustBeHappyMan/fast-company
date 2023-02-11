import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";
import PropTypes from "prop-types";

const User = (props) => {
  return (
    <tr key={props._id}>
      <td>{props.name}</td>
      <td>
        {props.qualities.map((quality) => (
          <Qualitie key={quality._id} {...quality} />
        ))}
      </td>
      <td>{props.profession.name}</td>
      <td>{props.completedMeetings}</td>
      <td>{props.rate}/5</td>
      <td>
        <button
          className="btn btn-sm btn-secondary"
          onClick={props.handleToggleBookmark.bind(null, props._id)}
        >
          <Bookmark status={props.bookmark} />
        </button>
      </td>
      <td>
        <button
          className="btn btn-sm btn-danger"
          onClick={props.handleDelete.bind(null, props._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

User.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rate: PropTypes.number,
  completedMeetings: PropTypes.number,
  profession: PropTypes.object,
  qualities: PropTypes.arrayOf(PropTypes.object),
  bookmark: PropTypes.bool,
  handleDelete: PropTypes.func.isRequired,
  handleToggleBookmark: PropTypes.func.isRequired,
};

export default User;
