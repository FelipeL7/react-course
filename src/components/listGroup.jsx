import React from "react";

const ListGroup = ({
  onItemSelect,
  items,
  textProperty,
  valueProperty,
  selectedGenre,
}) => {
  return (
    <ul className="list-group clickable">
      {items.map((genre) => (
        <li
          onClick={() => onItemSelect(genre)}
          key={genre[valueProperty]}
          className={
            genre === selectedGenre
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
