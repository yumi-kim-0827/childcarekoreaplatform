import React from "react";

const SubjectTitle = ({ title, script }) => {
  return (
    <>
      <div className="section-title">
        <h2>{title}</h2>
        <p>{script}</p>
      </div>
    </>
  );
};

export default SubjectTitle;
