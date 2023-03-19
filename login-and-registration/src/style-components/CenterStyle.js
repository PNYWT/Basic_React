import styled from "styled-components";

export const AuthFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: red; */

  @media (max-width: 600px) {
    padding: 5rem;
    border: 1px solid whitesmoke;
    border-radius: 30px;
    margin: 0.5rem;
  }
`;

export const LoginAndRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LabelText = styled.label`
  text-align: left;
  padding: 0.25rem 0;
  font-size: 14px;
  font-weight: bold;
`;

export const InputForm = styled.input`
  margin: 0.5rem 0;
  padding: 1rem;
  border: none;
  border-radius: 10px;
`;

export const SubmitBtn = styled.button`
  border: none;
  background-color: whitesmoke;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  color: #7439db;
`;

export const ChangeLoginRegis = styled.button`
  border: none;
  background: none;
  padding: 20px;
  color: whitesmoke;
  text-decoration: underline;
`;
