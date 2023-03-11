import { useContext } from "react";
import { LoginUserInfo } from "../App";

function LoginIsLogin() {
    const userLoginPage = useContext(LoginUserInfo)

    if (!!userLoginPage) {
        return (
            <div>
                <h3>เข้าสู่ระบบแล้วจ้า</h3>
                <p>Login by username = {userLoginPage.userName}</p>
                <p>Login by fullname = {userLoginPage.fullName}</p>
                <p><button>Log out</button></p>
            </div>
        );
    }else{
        return (
            <form>
                <h3>โปรดเข้าสู่ระบบ</h3>
                <p><input type="text" placeholder="Username" /></p>
                <p><input type="password" placeholder="Password" /></p>
                <p><button type="submit">Log in</button></p>
            </form>
        );
    }
}

export default LoginIsLogin;