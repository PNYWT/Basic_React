import logo from './logo.svg';
import './App.css';

function App() {
  const textInput = <input type= "text"></input>
  return (
    <div className="App">
      <h>Hello React</h>
      <p>Hello Again React</p>
      <p>
        {textInput}
      </p>
    </div>
  );
}

export default App;
