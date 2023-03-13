import "./App.css";
// import React, { useEffect, useReducer, useRef, useState } from "react";
// import SelectAndUploadManager from "./Component/SelectAndUploadManager"; <SelectAndUploadManager/>
// import UploadFileAndTextCopy from "./Component/UploadFileAndTextCopy"; //<UploadFileAndTextCopy></UploadFileAndTextCopy>
// import LoginMain from "./Component/LoginMain"; <LoginMain></LoginMain>
//import KeyBoardManager from "./Component/KeyBoardManager"; //<KeyBoardManager>ใช้ก็เอาไปใส่ใน Return </KeyBoardManager>
// import MainBeforePopupView from "./Component/MainBeforePopupView"; ใช้ก็เอาไปใส่ใน Return <MainBeforePopupView/>
// import LayoutGrid from "./Component/LayoutGrid";
// import LayoutBoxModule from "./Component/LayoutBoxModule";
// import NotificationList from "./Component/NotificationList"; <NotificationList></NotificationList>
// import NotificationListUseStyled from "./Component/NotificationListUseStyled";
// import LayoutBoxAndGridManager from "./Component/LayoutBoxAndGridManager"; <LayoutBoxAndGridManager inputColumnsGrid={3}/>
// import LayoutBoxAndGridModuleManager from "./Component/LayoutBoxAndGridModuleManager"; <LayoutBoxAndGridModuleManager></LayoutBoxAndGridModuleManager>
// import NotificationListUseStyledUI from "./Component/NotificationListUseStyledUI"; <NotificationListUseStyledUI></NotificationListUseStyledUI>
import AppHeader from "./ComponentLinkRoutes/AppHeader";
import PageAbout from "./ComponentLinkRoutes/PageAbout";
import PageHome from "./ComponentLinkRoutes/PageHome";
import Page404 from "./ComponentLinkRoutes/Page404";
import PagePost from "./ComponentLinkRoutes/PagePost";
import { Route, Routes } from "react-router-dom";

function App() {
  //return UI
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path="/" element={<PageHome/>} />
        <Route path="about/*" element={<PageAbout/>} />
        <Route path="post/:postId" element={<PagePost />} />
        <Route path="*" element={<Page404/>} />
      </Routes>
    </div>
  );
}
export default App;
