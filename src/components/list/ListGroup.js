import React from "react";

const ListGroup = ({ list, propertyName1 }) => {
  return (
    <ul>
      {list?.map((item, id) => {
        return <li key={id}>{item[propertyName1]}</li>;
      })}
    </ul>
  );
};

export default ListGroup;
