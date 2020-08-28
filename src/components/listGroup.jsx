import React from "react";

const ListGroup = ({
  onItemSelect,
  items,
  textProperty,
  valueProperty,
  selectedItem,
}) => {
  return (
    <ul className="list-group clickable">
      {items.map((genre) => (
        <li
          key={genre[valueProperty]}
          onClick={() => onItemSelect(genre)}
          className={
            genre === selectedItem
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default ListGroup;
