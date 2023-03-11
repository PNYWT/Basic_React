import React from "react";

const UploadFileManager = React.forwardRef((props, ref)=> {
    return(
        <div>
        <p>
          <input type="file" ref={ref}></input>
        </p>
        <p>
          <button onClick={props.uploadFileSelect}>Upload Now !!!</button>
        </p>
      </div>
    );
});

export default UploadFileManager;