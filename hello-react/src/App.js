import "./App.css";
import { useState } from "react";

const resetTextField = {
  nameContent: "",
  nameAuthor: "",
};

function App() {
  //Func event didchange note ใส่ข้อความใหม่แทนอันเก่า
  const [note, setNote] = useState({
    nameContent: "",
    nameAuthor: "",
  });
  function noteValueChange(event) {
    const { name, value } = event.target;
    setNote((oldNote) => {
      return {
        ...oldNote,
        [name]: value,
      };
    });
  }

  //Func event submit Note
  const [allNotes, setAllNotes] = useState([]);
  function allNotesSubmit(event) {
    event.preventDefault();
    setAllNotes((oldAllNotes) => {
      const newNote = { ...note };
      newNote.id = Date.now().toString(); //เพิ่มอะไรเข้าไปก็ได้เหมือนป้ายชื่อให้ note แต่ละชิ้น คล้ายๆ กับการเพิ่ม model เข้าไปเอง

      let today = new Date(); //ลองเพิ่มการแสดงวันที่เข้าไป
      let dateTimeSubmit =
        "Date " +
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate() +
        " Time:" +
        today.getHours() +
        ":" +
        today.getMinutes() +
        ":" +
        today.getSeconds();
      newNote.dateTime = dateTimeSubmit;
      return [newNote, ...oldAllNotes]; //อันใหม่พอกด submit จะแทรกด้านบน
      // [...oldAllNotes, note]; อันใหม่พอกด submit จะต่อท้ายไปเรื่อยๆ
    });
    setNote(resetTextField);
  }

  //Elements
  const noteElements = allNotes.map((oneNote) => {
    return (
      <div key={oneNote.id} className="app-note">
        <h4>Author: {oneNote.nameAuthor}</h4>
        <p>Content: {oneNote.nameContent}</p>
        <p>{oneNote.dateTime}</p>
      </div>
    );
  });

  //return UI
  return (
    <section className="app-section">
      <div className="app-container">
        <h3>Hello React</h3>
        <form onSubmit={allNotesSubmit}>
          <p>
            <textarea
              rows="3"
              placeholder="Name Content"
              name="nameContent"
              value={note.nameContent}
              onChange={noteValueChange}
            ></textarea>
          </p>
          <p>
            <input
              type="text"
              placeholder="Name Author"
              name="nameAuthor"
              value={note.nameAuthor}
              onChange={noteValueChange}
            ></input>
          </p>
          <p>
            <button type="submit">Click to Add</button>
          </p>
        </form>
        <div className="app-notes">{noteElements}</div>
      </div>
    </section>
  );
}
export default App;
