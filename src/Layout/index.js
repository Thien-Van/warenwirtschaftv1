import React from "react";
import { Route, Switch } from "react-router-dom";

import Shop from "../shop/Shop";
import ShelfItem from "../interface/Shelves/ShelfItem";

function Layout() {
  return (
    <div>
      <h1>Warenwirtschaft</h1>
      <div>
        <ShelfItem />
        <Shop />
      </div>
    </div>
  );
}

export default Layout;
