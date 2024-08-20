import React, { useEffect, useState } from "react";
import { DataView } from "primereact/dataview";
import { classNames } from "primereact/utils";

const ListGroup = ({ list, propertyName1, propertyName2, propertyName3 }) => {
  const [lists, setLists] = useState([]);

  console.log(list);

  useEffect(() => {
    setLists(list);
  }, []);

  const itemTemplate = (item, index) => {
    return (
      <div className="list-group-wrap" key={index}>
        <div className="list-text">{item[propertyName1]}</div>
        <div className="list-text">{item[propertyName2]}</div>
        <div className="list-tag">{item[propertyName3]}</div>
      </div>
    );
  };

  const listTemplate = (items) => {
    if (!items || items.length === 0) return null;

    let list = items.map((item, index) => {
      return itemTemplate(item, index);
    });

    return <div className="grid grid-nogutter">{list}</div>;
  };

  return (
    <DataView value={lists} listTemplate={listTemplate} paginator rows={15} />
  );
};

export default ListGroup;
