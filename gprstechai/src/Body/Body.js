import React    from "react";
import template from "./Body.jsx";

class Body extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Body;
