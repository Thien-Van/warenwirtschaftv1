import React from "react";

function Customer() {
  const customerNumber = 1;
  const customerStatus = "Breakfast";

  return (
    <div>
      <h2>Customer {customerNumber}</h2>
      <p>{customerStatus}</p>
    </div>
  );
}

export default Customer;
