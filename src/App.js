import { useState } from "react";
import "./styles.css";

export default function App() {
  const [output, setOutput] = useState(null);

  const equals = () => setOutput(eval(output));
  const clear = () => setOutput(null);

  function equationHandler(clickedValue) {
    if (output === null) {
      setOutput(clickedValue);
    } else if (clickedValue != null) {
      setOutput(output + clickedValue);
    }
  }

  return (
    <div>
      <div>
        <Button onClickFunction={equationHandler} value={"1"} />
        <Button onClickFunction={equationHandler} value={"2"} />
        <Button onClickFunction={equationHandler} value={"3"} />
      </div>
      <div>
        <Button onClickFunction={equationHandler} value={"4"} />
        <Button onClickFunction={equationHandler} value={"5"} />
        <Button onClickFunction={equationHandler} value={"6"} />
      </div>
      <div>
        <Button onClickFunction={equationHandler} value={"7"} />
        <Button onClickFunction={equationHandler} value={"8"} />
        <Button onClickFunction={equationHandler} value={"9"} />
      </div>
      <div>
        <Button onClickFunction={equationHandler} value={"0"} />
      </div>
      <br />
      <div>
        <Button onClickFunction={equationHandler} value={"+"} />
        <Button onClickFunction={equationHandler} value={"-"} />
        <Button onClickFunction={equationHandler} value={"*"} />
        <Button onClickFunction={equationHandler} value={"/"} />
      </div>
      <div>
        <Button onClickFunction={equals} value={"="} />
        <Button onClickFunction={clear} value={"Clear"} />
      </div>
      <Display message={output} />
    </div>
  );
}

function Button(props) {
  const handleClick = () => props.onClickFunction(props.value);
  return <button onClick={handleClick}>{props.value}</button>;
}

function Display(props) {
  return <h1>{props.message}</h1>;
}
