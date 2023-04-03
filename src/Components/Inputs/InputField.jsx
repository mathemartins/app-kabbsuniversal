import React from "react";

const InputField = ({ placeHolder, classname }) => {
  return (
    <>
      <div className="relative">
        <input placeholder={placeHolder} className={classname} />
      </div>
    </>
  );
};

export default InputField;
