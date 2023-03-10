import { useEffect, useState } from "react";
import "./App.css";
import PopupView from "./Component/PopupView";
// import KeyBoardManager from "./Component/KeyBoardManager"; <KeyBoardManager>ใช้ก็เอาไปใส่ใน Return </KeyBoardManager>

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  let popup = null;
  if (isPopupOpen === true){
    popup = <PopupView closePopup={() => setIsPopupOpen(false)}></PopupView>
  }
  //return UI
  return (
    <section className="app-section">
      <div className="app-container">
        <h1>List API</h1>
        <button onClick={()=> {setIsPopupOpen(true)}}>Open popup view</button>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      </div>
      {popup}
    </section>
  );
}
export default App;
