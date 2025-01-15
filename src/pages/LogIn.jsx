import React from 'react'
import PrimaryAuthWrapper from '../Components/AuthForm/Wrapper'
import AuthFormInputBox from '../Components/AuthForm/InputBox'
import img from "../assets/authform/log.webp"
import AuthFormSubmitBtn from '../Components/AuthForm/SubmitBtn'
import ground from "../assets/authform/ground.svg"

function LogInPage() {
  return (
    <PrimaryAuthWrapper img={img} header={"Welcome Back"}>
        <AuthFormInputBox label="Email" placeholder="Enter your email" />
        <AuthFormInputBox label="Password" type='password' placeholder="Enter your Password" />
        <AuthFormSubmitBtn text={"Log In"} />
        
        <img className='relative mt-[28vh] w-full' src={ground} alt="" />
    </PrimaryAuthWrapper>
  )
}

export default LogInPage