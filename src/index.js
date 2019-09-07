import React from "react";
import ReactDOM from "react-dom";
import { Button } from "./button";
import {Select} from './select';


const handleChange = (e) =>{
  const value = e.target.value;
  alert(`${value} was selected`);
}
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

const selectStyle = {
  width:"200px",
  padding:"10px 30px",
  border:"2px solid black"
}

const btnValue = "Submit";

const handleBtnClick = () => {
  alert("button was clicked");
};

ReactDOM.render(
  <div>
    <SayHello name="Tope" />
    <SayGoodBye />
    {/*<Button
      handleClick={handleBtnClick}
      buttonStyle={btnStyle}
      buttonValue={btnValue}
    />

    <Button
          handleClick={handleBtnClick}
          buttonStyle={btnStyle2}
          buttonValue={btnValue}
      />*/}
      <Select handleChange={handleChange} selectStyle={selectStyle} />
  </div>,
  document.getElementById("root")
);
