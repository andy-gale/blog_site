import { useState } from "react";

function ListGroup() {
  let items = ["item1", "item2", "item3", "item4", "item5"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>Label</h1>
      {items.length === 0 && <p>no item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          //handleClick not a function call, rather pass by reference
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
