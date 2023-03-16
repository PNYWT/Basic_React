import './App.css';
import {useState, useEffect, createContext} from "react"
import axios from 'axios'
import {Routes, Route} from 'react-router-dom'

//Components
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import FooterBar from './components/FooterBar';

//save data in DataContext to use in other components
//createContext ใช้คู่กับ useContext
export const DataContext = createContext();



function App() {
  const [dataJson, setDataJson] = useState([]);

  useEffect(() =>{
    axios.get("https://gitconnected.com/v1/portfolio/pnywt")
      .then(res => setDataJson(res.data))
  }, [])

  return (
    //ส่ง value dataJson ไปใน DataContext เพื่อนำไปใช้ใน components อื่นๆ เหมือนกับ appdelegate.share ประมาณนั้น
    <DataContext.Provider value={dataJson}>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
      <FooterBar/>
    </DataContext.Provider>
  );
}

export default App;
