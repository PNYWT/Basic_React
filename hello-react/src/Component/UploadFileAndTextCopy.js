import React, { useRef } from "react";
function UploadFileAndTextCopy(){
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
    return(
       <div>
         <p>
          <input type="file" ref={fileRef}></input>
        </p>
        <p>
          <button onClick={uploadFile}>Upload Now !!!</button>
        </p>
        <p>
          <textarea ref={textAreaRef}></textarea>
        </p>
        <p>
          <button onClick={commentPostCopy}>Comment Now !!!</button>
        </p>
       </div>
    );
}
export default UploadFileAndTextCopy;