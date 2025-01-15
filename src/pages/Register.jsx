import React from 'react'
import PrimaryAuthWrapper from '../Components/AuthForm/Wrapper'
import AuthFormInputBox from '../Components/AuthForm/InputBox'
import img from "../assets/authform/reg.jpg"
import AuthFormSubmitBtn from '../Components/AuthForm/SubmitBtn'
import ground from "../assets/authform/ground.svg"

function RegisterPage() {
  return (
    <PrimaryAuthWrapper img={img} header={"Join us to get started"}>
        <AuthFormInputBox label="Full Name" placeholder="Enter your full name" />
        <AuthFormInputBox label="Email" placeholder="Enter your email" />
        <AuthFormInputBox label="Parent or Child" placeholder={"Select if parent or child"} />
        <AuthFormInputBox label="Password" type='password' placeholder="Enter your Password" />
        <AuthFormSubmitBtn text={"Log In"} />
        <img className='relative bottom-0 w-full' src={ground} alt="" />
    </PrimaryAuthWrapper>
  )
}

export default RegisterPage