import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate();
    const [inputText, setInputText] = useState({
        email: "",
        password: ""
    })
    const handelSubmit = (e) => {
        e.preventDefault();
        const loggedUser = JSON.parse(localStorage.getItem("user"))
        if (inputText.email === "" && inputText.password === "") {
            alert("Please Enter Email and Password")
        }
        else if (inputText.email === loggedUser.email && inputText.password === loggedUser.password) {
            localStorage.setItem("loggedIn", true)
            navigate("/")
        }
        else {
            alert("Email or Password is wrong")
        }
    }
    return (
        <div className='bg-blue-800 h-[100vh] w-[100%] flex justify-center text-center items-center flex-col container'>
            <div className='bg-white md:h-[30rem] h-[25rem] md:w-[29rem] w-[20rem] md:mb-0 mb-[5rem] rounded-xl  shadow-cyan-500/50'>
                <form
                    onSubmit={handelSubmit}
                    className='md:my-[4rem] my-[10px]'>

                    <div className='flex flex-col items-start mt-[3rem]'>
                        <label className='md:ml-[2rem] ml-[33px] md:my-[10px]' htmlFor="email">Email</label>
                        <input
                            name="email"
                            value={inputText.email}
                            onChange={(e) => setInputText({
                                ...inputText,
                                [e.target.name]: e.target.value
                            })}
                            type="text"
                            className='md:w-[25rem] w-[15rem] h-[2rem] md:ml-[2rem] ml-[2.2rem]'
                            placeholder='Please enter the Email' />
                    </div>
                    <div className='flex flex-col items-start mt-[3rem]'>
                        <label className='md:ml-[2rem] ml-[33px] md:my-[10px]' htmlFor="name"> Password</label>
                        <input
                            name="password"
                            value={inputText.password}
                            onChange={(e) => setInputText({
                                ...inputText,
                                [e.target.name]: e.target.value
                            })}
                            type="password"
                            className='md:w-[25rem] w-[15rem] h-[2rem] md:ml-[2rem] ml-[2.2rem]' placeholder='Please enter the Password' />
                    </div>
                    <button className='bg-cyan-500 shadow-lg shadow-cyan-500/50 md:mt-[3rem] md:h-[30px] md:w-[8rem] w-[5rem] md:rounded-2xl rounded-xl my-[50px] 
                '>Login</button>
                </form>
                <p>Don't Have an account?
                    <Link className='text-blue-600 underline' to="/Register">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login
