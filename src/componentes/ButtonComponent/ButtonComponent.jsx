import "./button.css"
import React, { useState } from 'react';

function ButtonComponent (props) {

  const[textLabel, setTextLabel] = useState("Haz click aqui")

  function handleChangeButton(){
    alert("change")
    setTextLabel="Gracias por clickear!"
    console.log(textLabel)

  }
    const {label, colorBG}=props
  const styleButton = {
    backgroundColor:colorBG,
  };
  return (
    <div>
      <Button className="btn" onClickeando={handleChangeButton} style={styleButton}>{textLabel} </Button>
    </div>
  );
}

const Button=(props)=>{
  return(
    <button onClick={props.onClickeando}>
  {props.children}

    </button>



  )



}

export default ButtonComponent;
