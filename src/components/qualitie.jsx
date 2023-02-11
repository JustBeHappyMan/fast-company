import React from "react";
import PropTypes from "prop-types";

const Qualitie = ({ color, name, _id }) => {
  return (
    <React.Fragment>
      <span key={_id} className={["badge", "mx-1", `bg-${color}`].join(" ")}>
        {name}
      </span>
    </React.Fragment>
  );
};

Qualitie.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Qualitie;
