import React from "react";
import './Heading.css'

const elements = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
};

function Heading({ level,value,children, ...props }) {
  return (
    <div>
      <div id={value} class="assist-div"></div>
      {React.createElement(elements[level] || elements.h1, props, children)}
    </div>
  )
}

Heading.defaultProps = {
  type: "h1"
};

export default Heading;