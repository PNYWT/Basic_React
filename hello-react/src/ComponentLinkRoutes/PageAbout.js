import { Link, Navigate, Route, Routes } from "react-router-dom";
import LayoutPage from "./LayoutPage.js";
import PageMySelf from "./PageMyself.js";

function PageAbout() {
  return (
    <LayoutPage>
      <h2>About เกี่ยวกับเรื่องของหมู่เฮา</h2>
      <p>
        <Link to="myself">Myself</Link>
      </p>
      <p>
        <Link to="history">History</Link>
      </p>
      <Routes>
        <Route path="myself" element={<PageMySelf/>} />
        <Route
          path="history"
          element={
            <div>
              <h3>History</h3>
              <p>The end of Engineer and Investment Consultant</p>
            </div>
          }
        />
        <Route path="/" element={<Navigate to="myself" replace={true} />} />
      </Routes>
    </LayoutPage>
  );
}

export default PageAbout;
