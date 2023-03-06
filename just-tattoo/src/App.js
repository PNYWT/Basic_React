import "./App.css";
import AppHeader from "./components/AppHeader";
import TattooItem from "./components//TattooItem";
import TattooPost from "./components/TattooPost";
import TattooModel from "./ModelData/tattoos";

function App() {
    const tattooElement = TattooModel.map((tattoo, index) =>{
        return <TattooItem key={index} tattoo={tattoo}></TattooItem>;
    });
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <div className="app-grid">
        {tattooElement};
      </div>
      {/* <TattooPost></TattooPost> */}
    </div>
  );
}
export default App;
