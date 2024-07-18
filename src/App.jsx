import { useEffect, useRef, useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";

function App() {
  const [count, setCount] = useState(0);
  // const [input, setInput] = useState("zz");
  // const isMount = useRef(false);

  // useEffect(() => {
  //   if (!isMount.current) {
  //     isMount.current = true;
  //     return;
  //   }
  //   console.log(isMount);
  // });

  const onClickHandler = (number) => {
    setCount(count + number);
  };

  return (
    <div className="app">
      <h1>Simple Counter🎰</h1>
      {/* <input onChange={(e) => setInput(e.target.value)}></input> */}
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickHandler={onClickHandler} />
      </section>
    </div>
  );
}

export default App;
