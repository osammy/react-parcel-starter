import React from "react";
import ReactDOM from "react-dom";
import { Button } from "./button";

function SayHello(props) {
  const { name } = props;
  return <p>Hello there, {name}</p>;
}

function SayGoodBye() {
  return <p>Hello, goodbye!</p>;
}
const btnStyle = {
  background:"red",
  color:"#fff",
  borderRadius:"5px",
  padding:"20px"
}

const btnStyle2 = {
  background:"green",
  color:"#fff",
  borderRadius:"5px",
  padding:"20px"
}

const btnValue = "Submit";

const handleBtnClick = () => {
  alert("button was clicked");
};

ReactDOM.render(
  <div>
    <SayHello name="Tope" />
    <SayGoodBye />
    <Button
      handleClick={handleBtnClick}
      buttonStyle={btnStyle}
      buttonValue={btnValue}
    />

    <Button
          handleClick={handleBtnClick}
          buttonStyle={btnStyle2}
          buttonValue={btnValue}
      />
      <select>
        <option>1</option>
        <option>2</option>
      </select>
  </div>,
  document.getElementById("root")
);
