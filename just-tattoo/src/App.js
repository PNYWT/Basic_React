import "./App.css";
import AppHeader from "./components/AppHeader";
import TattooItem from "./components//TattooItem";
import TattooPost from "./components/TattooPost";
import TattooModel from "./ModelData/tattoos";
import { useState } from "react";

function App() {
  const [selectedTattoo, setTextselectedTattoo] = useState(null);

  function clickTattooOpen(indexTattoo) {
    setTextselectedTattoo(indexTattoo);
  }

  function clickTattooClose() {
    setTextselectedTattoo(null);
  }

  const tattooElement = TattooModel.map((tattoo, index) => {
    return <TattooItem key={index} tattoo={tattoo} clickOpen = {clickTattooOpen}></TattooItem>;
  });

  let tattooModelSelected = null;
  if (!!selectedTattoo) {
    tattooModelSelected = <TattooPost tattoo={selectedTattoo} onBgClick = {clickTattooClose}></TattooPost>;
  }

  return (
    <div className="App">
      <AppHeader></AppHeader>
      {/* <button onClick={() =>{
        clickTattooOpen((TattooModel[3]))
      }}>Click it !!!</button> */}
      <div className="app-grid">{tattooElement}</div>
      {tattooModelSelected}
    </div>
  );
}
export default App;
