import React from "react";
import { Route, Switch } from "react-router-dom";

import Shop from "../shop/Shop";

function Layout() {
  return (
    <div>
      <h1>Warenwirtschaft</h1>
      <div>
        <Shop />
      </div>
    </div>
  );
}

export default Layout;
