import "./App.css";
import AppHeader from "./components/AppHeader";
import TattooItem from "./components//TattooItem";
import TattooPost from "./components/TattooPost";
import TattooModel from "./ModelData/tattoos";
import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [selectedTattoo, setTextselectedTattoo] = useState(null);
  const [searchText, setSearchText] = useState("");

  function clickTattooOpen(indexTattoo) {
    setTextselectedTattoo(indexTattoo);
  }

  function clickTattooClose() {
    setTextselectedTattoo(null);
  }

  //func filtered keyword you want
  const filteredTattoo = TattooModel.filter((tattoo) => {
    return tattoo.title.includes(searchText);
  });

  //func tattooElement to show
  const tattooElement = filteredTattoo.map((tattoo, index) => {
    return (
      <TattooItem
        key={index}
        tattoo={tattoo}
        clickOpen={clickTattooOpen}
      ></TattooItem>
    );
  });

  let tattooModelSelected = null;
  if (!!selectedTattoo) {
    tattooModelSelected = (
      <TattooPost
        tattoo={selectedTattoo}
        onBgClick={clickTattooClose}
      ></TattooPost>
    );
  }

  return (
    <div className="App">
      <AppHeader></AppHeader>
      <section className="app-section">
        <div className="app-container">
          <SearchBar
            valueSearchText={searchText}
            onValueChange={setSearchText}
          ></SearchBar>
          <div className="app-grid">{tattooElement}</div>
        </div>
      </section>
      {tattooModelSelected}
    </div>
  );
}
export default App;
