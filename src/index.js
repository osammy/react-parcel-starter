import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from "./button";

function SayHello(props) {
  const { name } = props;
  return <p>Hello there, {name}</p>
}

function SayGoodBye() {
  return <p>Hello, goodbye!</p>
}






ReactDOM.render(
  <div>
  <SayHello name="Tope" />
  <SayGoodBye />
  <Button />
  </div>,
  document.getElementById('root')
);