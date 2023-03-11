import LoginArea from "./LoginArea";
import React, { useReducer} from "react";

const LoginContext = React.createContext();

function setReducer(state, action){
  if (action.type === "login_type"){
    const {userName, fullName} = action.payload //{userName:"Admin1234", fullName: "Admin Admin"};
    return {userName, fullName}
  }else if (action.type === "logout_type"){
    return null;
  }else{
    return state;
  }
}

function LoginMain(){
    const [userDataState, userDataDispatch] = useReducer(setReducer,null);
  //return UI
  return (
    <LoginContext.Provider value={{userDataState,userDataDispatch}}>
      <section className="app-section">
      <div className="app-container">
        <LoginArea/>
      </div>
    </section>
    </LoginContext.Provider>
  );
}
export {LoginContext};
export default LoginMain;