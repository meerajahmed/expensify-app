import React from "react";
import ReactDOM from "react-dom";

// Calls the children callback numTimes to produce a repeated component
  function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  /* repeat para 10 times */
  return (
    <Repeat numTimes={10}>
      {(index) => <p key={index}>This is item {index} in the list</p>}
    </Repeat>
  );
}

ReactDOM.render(<ListOfTenThings />, document.getElementById("app"));