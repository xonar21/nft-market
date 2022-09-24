
import React from "react";
import WOW from 'wowjs';
import 'animate.css';
import './App.css';
import Header from '../Header/Header';
import Art from '../Art/Art';
function App() {
  React.useEffect(() => {
    new WOW.WOW({
        live: false
    }).init();
  }, [])
  return (
    <>
      <Header/>
      <Art/>
    </>
  );
}

export default App;
