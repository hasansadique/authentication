import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [inputText, setInputText] = useState({
        name: "",
        email: "",
        password: ""
    })
    const handelChange = (e) => {
        const { name, value } = e.target
        setInputText(prevText => {
            return {
                ...prevText,
                [name]: value
            }
        })
    }

    const navigate = useNavigate();
    const handelSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(inputText))
        if (inputText.name === "" && inputText.email === "" && inputText.password === "") {
            alert("fill the data for sign up")
        } else {
            navigate("/login")
        }
    }
    return (
        <div className='bg-blue-800 h-[100vh] w-[100%] flex justify-center text-center items-center flex-col container'>
            <div className='bg-white md:h-[40rem] h-[30rem] md:w-[29rem] w-[20rem] md:mb-0 mb-[5rem] rounded-xl  shadow-cyan-500/50'>
                <h1 className='md:text-3xl text-2xl my-[30px]'>
                    CREATE AN ACCOUNT
                </h1>
                <form onSubmit={handelSubmit}
                    className='md:my-[4rem] my-[10px]'>
                    <div className='flex flex-col items-start'>
                        <label className='md:ml-[2rem] ml-[33px] md:my-[10px]' htmlFor="name">Your Name</label>
                        <input
                            name="name"
                            value={inputText.name}
                            onChange={handelChange}
                            className='md:w-[25rem] w-[15rem] h-[2rem] md:ml-[2rem] ml-[2.2rem] border-solid border-black'
                            type="text"
                            placeholder='Please enter the Name' />

                    </div>
                    <div className='flex flex-col items-start mt-[3rem]'>
                        <label className='md:ml-[2rem] ml-[33px] md:my-[10px]' htmlFor="email">Your Email</label>
                        <input
                            name="email"
                            value={inputText.email}
                            onChange={handelChange}
                            type="email"
                            className='md:w-[25rem] w-[15rem] h-[2rem] md:ml-[2rem] ml-[2.2rem]'
                            placeholder='Please enter the Email' />
                    </div>
                    <div className='flex flex-col items-start mt-[3rem]'>
                        <label className='md:ml-[2rem] ml-[33px] md:my-[10px]' htmlFor="name">Your Password</label>
                        <input
                            name="password"
                            value={inputText.password}
                            onChange={handelChange}
                            type="password"
                            className='md:w-[25rem] w-[15rem] h-[2rem] md:ml-[2rem] ml-[2.2rem]'
                            placeholder='Please enter the Password' />
                    </div>
                    <button className='bg-cyan-500 shadow-lg shadow-cyan-500/50 md:mt-[3rem] md:h-[30px] md:w-[8rem] w-[5rem] md:rounded-2xl rounded-xl mt-[25px] 
                    '>Register</button>
                </form>
                <p>Have already an account?
                    <Link className='text-blue-600 underline' to="/Login">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Register
