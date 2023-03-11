import { useState } from "react";
import PopupView from "./PopupView";

function MainBeforePopupView(){
    const [isPopupOpen, setIsPopupOpen] = useState(false);

  let popup = null;
  if (isPopupOpen === true){
    popup = <PopupView closePopup={() => setIsPopupOpen(false)}></PopupView>
  }

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

export default MainBeforePopupView