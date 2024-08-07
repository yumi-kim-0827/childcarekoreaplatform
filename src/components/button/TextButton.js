import React from "react";
import { Button } from "primereact/button";

const TextButton = ({ label, onClick, data }) => {
  return (
    <Button
      label={label}
      text
      onClick={() => {
        onClick(data);
      }}
    />
  );
};

export default TextButton;
