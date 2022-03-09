import React from "react";

const LabelForm = ({ htmlFor, textLabel }) => {
  return (
    <label htmlFor={htmlFor} className="uppercase font-bold">
      {textLabel}
    </label>
  );
};

export default LabelForm;
