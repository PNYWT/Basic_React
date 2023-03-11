import { useContext } from "react";
import { LoginContext } from "./LoginMain";

const fakeUser = {userName:"Admin1234", fullName: "Admin Admin"};

function LoginIsLogin() {
    const {userDataState, userDataDispatch} = useContext(LoginContext)

    function loginSubmit(event){
        event.preventDefault();
        userDataDispatch({type:"login_type" , payload: fakeUser})
    }

    function logoutUser(){
        userDataDispatch({type:"logout_type"})
    }

    if (!!userDataState) {
        return (
            <div>
                <h3>เข้าสู่ระบบแล้วจ้า</h3>
                <p>Login by username = {userDataState.userName}</p>
                <p>Login by fullname = {userDataState.fullName}</p>
                <p><button onClick={logoutUser}>Log out</button></p>
            </div>
        );
    }else{
        return (
            <form onSubmit={loginSubmit}>
                <h3>โปรดเข้าสู่ระบบ</h3>
                <p><input type="text" placeholder="Username" /></p>
                <p><input type="password" placeholder="Password" /></p>
                <p><button type="submit">Log in</button></p>
            </form>
        );
    }
}
export default LoginIsLogin;