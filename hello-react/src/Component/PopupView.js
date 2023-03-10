import { useEffect } from "react";
import "./PopupView.css";

function PopupView(prop){
    useEffect(() =>{
        console.log("start popup")
        document.documentElement.style.overflowY = "hidden";
        return(()=>{
            console.log("Close popup")
            document.documentElement.style.overflowY = "auto";
        })
    }, []);
    return <div className="popup" onClick={prop.closePopup}/>
}
export default PopupView;