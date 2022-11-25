import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function changeToggle(){
    setIsOn((isOn) => !isOn)
  }
  return <button onClick={changeToggle} style={isOn ? {background:"yellow"} : {background:"blue"}}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
