import './App.css';
import { useState } from 'react';

function App() {
  const [note, setNote] = useState({
    nameContent:"",
    nameAuthor:""
  });

  function noteValueChange(event){
    const {name, value} = event.target
    console.log(name + "=>" + value)
    setNote((oldNote) =>{
      return {
        ...oldNote,
        [name]:value
      }
    })
  }

  return (
    <section className='app-section'>
      <div className='app-container'>
        <h3>Hello React</h3>
        <p>
          <textarea
          rows="3"
          placeholder='Name Content'
          name='nameContent'
          value={note.nameContent}
          onChange={noteValueChange}></textarea>
        </p>
        <p>
          <input
          type="text"
          placeholder='Name Author'
          name='nameAuthor'
          value={note.nameAuthor}
          onChange={noteValueChange}></input>
        </p>
      </div>
    </section>
  );
}

export default App;
