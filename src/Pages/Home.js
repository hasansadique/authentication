import React from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const userName = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate();
    const handelLogOut = () => {
        localStorage.removeItem("loggedIn")
        navigate("/login")
    }
    return (
        <div className='bg-blue-800 h-[100vh] w-[100%] flex justify-center text-center items-center flex-col container'>
            <div className='bg-white md:h-[20rem] h-[15em] md:w-[29rem] w-[20rem] md:mb-0 mb-[5rem] rounded-xl  shadow-cyan-500/50'>
                <h1 className='md:text-3xl text-2xl my-[30px]'>
                    HOMEPAGE
                </h1>
                <form>
                    <p>Welcome {userName.name}</p>
                    <button onClick={handelLogOut} className='bg-cyan-500 shadow-lg shadow-cyan-500/50 md:mt-[3rem] md:h-[30px] md:w-[8rem] w-[5rem] md:rounded-2xl rounded-xl mt-[25px] 
                '>LogOut</button>
                </form>
            </div>
        </div>
    )
}

export default Home
