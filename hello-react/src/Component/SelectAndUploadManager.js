import React, { useRef } from "react";
import SelectTextAreaManager from "./SelectTextAreaManager";
import UploadFileManager from "./UploadFileManager"; 

function SelectAndUploadManager() {
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

  return <div>
    <h2>Hello ForwardRef</h2>
    <UploadFileManager uploadFileSelect={uploadFile} ref={fileRef}/>
    <SelectTextAreaManager selectCommentPostCopy={commentPostCopy} ref={textAreaRef}/>
  </div>;
}
export default SelectAndUploadManager;
