import React from "react";

const SelectTextAreaManager = React.forwardRef((props, ref)=> {
    return(
        <div>
        <p>
          <textarea ref={ref}></textarea>
        </p>
        <p>
          <button onClick={props.selectCommentPostCopy}>Select Text Now !!!</button>
        </p>
      </div>
    );
});

export default SelectTextAreaManager;