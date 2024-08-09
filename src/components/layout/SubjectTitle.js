import React from "react";

const SubjectTitle = ({ title, script }) => {
  return (
    <>
      <div className="py-4 px-0 border-b border-light-skyblue">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="color-dark-gray text-sm">{script}</p>
      </div>
    </>
  );
};

export default SubjectTitle;
