import React, { useEffect, useReducer, useRef, useState } from "react";
import "./App.css";
import SelectTextAreaManager from "./Component/SelectTextAreaManager";
import UploadFileManager from "./Component/UploadFileManager";
// import UploadFileAndTextCopy from "./Component/UploadFileAndTextCopy"; //<UploadFileAndTextCopy></UploadFileAndTextCopy>
// import LoginMain from "./Component/LoginMain"; <LoginMain></LoginMain>
//import KeyBoardManager from "./Component/KeyBoardManager"; //<KeyBoardManager>ใช้ก็เอาไปใส่ใน Return </KeyBoardManager>
// import MainBeforePopupView from "./Component/MainBeforePopupView"; ใช้ก็เอาไปใส่ใน Return <MainBeforePopupView/>

function App() {
  const fileRef = useRef(null);
  const textAreaRef = useRef(null);

  function uploadFile() {
    const currentFile = fileRef.current.files[0];
    console.log(currentFile);
  }

  function commentPostCopy() {
    textAreaRef.current.focus();
    textAreaRef.current.select();
  }

  //return UI
  return (
    <section className="app-section">
      <div className="app-container">
        <h2>Hello useRef</h2>
        <UploadFileManager uploadFileSelect={uploadFile} ref={fileRef}/>
        <SelectTextAreaManager selectCommentPostCopy={commentPostCopy} ref={textAreaRef}/>
      </div>
    </section>
  );
}
export default App;
