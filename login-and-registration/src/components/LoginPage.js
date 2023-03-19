import React, { useState } from "react";
import { AuthFormContainer, LoginAndRegisterForm, LabelText, InputForm, SubmitBtn, ChangeLoginRegis } from "../style-components/CenterStyle";

function LoginPage(props) {
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");

  const submitForm = (loginEvent) => {
    loginEvent.preventDefault();
    const { email } = loginEvent.target;
    console.log(email);
  };
  return (
    <AuthFormContainer>
        <h2>Login</h2>
      <LoginAndRegisterForm onSubmit={submitForm}>
        {/* Client Script(JavaScript) สามารถอ่านได้ทั้งชื่อ name และ id แต่ในกรณีที่ไม่มี id ก็จะอ่านจาก name เป็นหลัก */}
        <LabelText htmlFor="email">Email</LabelText>
        <InputForm
          type="email"
          placeholder="yourEmail@mail.com"
          id="email"
          name="email"s
          value={email}
        />
        <LabelText htmlFor="password">Password</LabelText>
        <InputForm
          type="password"
          placeholder="!@#$%^&"
          id="password"
          name="password"
          value={password}
        />
        <SubmitBtn type="submit">Log in</SubmitBtn>
      </LoginAndRegisterForm>
      <ChangeLoginRegis onClick={() => props.onFormSwitch("register")}>Don't Have an account?</ChangeLoginRegis>
    </AuthFormContainer>
  );
}

export default LoginPage;
