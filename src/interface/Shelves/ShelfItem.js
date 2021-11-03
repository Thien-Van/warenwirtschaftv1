import React from "react";

function ShelfItem() {
  const amount = 0;
  const itemName = "badabing";

  return (
    <div>
      <h3>{itemName}</h3>
      <div>
        <button>+</button>
        <p>{amount}</p>
        <button>-</button>
      </div>
    </div>
  );
}

export default ShelfItem;
