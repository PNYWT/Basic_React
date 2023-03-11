import React, { useEffect, useState } from "react";
import "./App.css";
import LoginArea from "./Component/LoginArea";
//import KeyBoardManager from "./Component/KeyBoardManager"; //<KeyBoardManager>ใช้ก็เอาไปใส่ใน Return </KeyBoardManager>
// import MainBeforePopupView from "./Component/MainBeforePopupView"; ใช้ก็เอาไปใส่ใน Return <MainBeforePopupView/>

const fakeUser = {userName:"Admin1234", fullName: "Admin Admin"};
const LoginUserInfo = React.createContext();

function App() {
  //return UI
  return (
    <LoginUserInfo.Provider value={fakeUser}>
      <section className="app-section">
      <div className="app-container">
        <LoginArea/>
      </div>
    </section>
    </LoginUserInfo.Provider>
  );
}
export {LoginUserInfo};
export default App;
