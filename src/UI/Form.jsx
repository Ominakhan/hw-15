import React from "react";
import useInput from "../hooks/useInput";
import styled from "styled-components";

const Form = () => {
  const text = useInput("")
  const date = useInput("")
  const email = useInput("")
  const password = useInput("")
 
  const submitForm = (event)=>{
    event.preventDefault();
    console.log("text", text.value);
    console.log("date", date.value);
    console.log("email", email.value);
    console.log("password", password.value);
  }

    return (
        <FormStyle onSubmit={submitForm}>
            <label>
                Name
            <TextInput placeholder="Text" type="text" value={text.value} onChange={text.onChange}/>
            </label>
           
            <label>
                Date
                <TextInput placeholder="Date" type="Date" value={date.value} onChange={date.onChange}/>
            </label>
            
            <label>
                E-mail
                <TextInput placeholder="Email" value={email.value} onChange={email.onChange}/>
            </label>
           
            <label>
                Password
               <TextInput placeholder="Password" type="password" value={password.value} onChange={password.onChange}/>
            </label>
            
            <SubmitButton type="submit">Sign in</SubmitButton>
        </FormStyle>
    );
};

export default Form;

const FormStyle = styled.form`
    width: 500px;
    height: 300px;
    margin-top: 50px;
    background-color: #7777e4;
    display: inline-block;
    padding: 30px 90px;
`

const TextInput = styled.input`
  display: flex;
  width: 300px;
  height: 30px;
  background-color: violet;
  font-size: 24px;
`
const SubmitButton = styled.button`
   width: 90px;
   height: 30px;
   margin-top:5px;
   :active{
    background-color: red;
   }
`


