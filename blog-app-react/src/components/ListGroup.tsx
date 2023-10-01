import { MouseEvent } from "react";

function ListGroup() {
  let items = ["item1", "item2", "item3", "item4", "item5"];

  //Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>Label</h1>
      {items.length === 0 && <p>no item found</p>}
      <ul className="List">
        {items.map((item) => (
          //handleClick not a function call, rather pass by reference
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
