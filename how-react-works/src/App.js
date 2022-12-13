import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';


function App() {
  // const [paragraphState, setParagraphState] = useState(false);
  // const [allowToggling, setAllowToggling] = useState(false);

  const [listTitle, setListTitle] = useState("My List");

  const changeParagraphHandler = useCallback(() => {
    setListTitle("Changed List ");
    // setParagraphState((prevState) => !prevState);
  }, []);

  // const allowTogglingHandler = useCallback(() => {
  //   setAllowToggling(true);
  // }, []);

  const listItems = useMemo(() => [6, 3, 8, 1, 13], []);


  return (
    <div className="app">
      {/* <h1 id="title">Hi there!</h1> */}
      <DemoOutput items={listItems} title={listTitle}></DemoOutput>
      <Button onClick={changeParagraphHandler}>Change paragraph Title</Button>
      {/* <Button onClick={allowTogglingHandler}>Allow Toggling</Button> */}
    </div>
  );
}

export default App;
