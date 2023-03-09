import { useEffect, useState } from "react";
import "./App.css";
// import KeyBoardManager from "./Component/KeyBoardManager"; <KeyBoardManager>ใช้ก็เอาไปใส่ใน Return </KeyBoardManager>

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2").then(res =>{
      return res.json();
    }).then(resJson =>{
      setUsers(resJson.data);
    })
  }, []); 

  const usersModel = users.map(user =>{
    return <div>
      <h3>{user.first_name} {user.last_name}</h3>
      <p>email : {user.email}</p>
      <br></br>
    </div>
  })

  //return UI
  return (
    <section className="app-section">
      <div className="app-container">
        <h1>List API</h1>
        {usersModel}
      </div>
    </section>
  );
}
export default App;
