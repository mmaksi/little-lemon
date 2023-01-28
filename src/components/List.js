import React from "react";
import "./List.css"

const List = ({ title, list }) => {
  return (
    <div className="list">
      <h2 className="list-header">{title}</h2>
      <div className="list-links">
        {list.map((link) => {
          return <a>{link}</a>;
        })}
      </div>
    </div>
  );
};

export default List;
