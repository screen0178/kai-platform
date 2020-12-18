import React from "react"
import {useHistory} from 'react-router'
import { useForm } from "react-hook-form"

import AuthService  from '../services/auth.service'

const Login = () => {
    const { register, handleSubmit, errors } = useForm()
    const history = useHistory()
    const onSubmit = data => {        
        AuthService.login(data)
        .then(() =>{
            history.push("/dashboard")
            window.location.reload()
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <div className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
                <header className="max-w-lg mx-auto">
                        {/* <h1 className="text-4xl font-bold text-white text-center">Login</h1> */}
                </header>

                <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                    <div>
                        <h3 className="font-bold text-2xl">KAI Platform</h3>
                        <p className="text-gray-600 pt-2">Sign in to your account.</p>
                    </div>

                    <div className="mt-10">
                        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-6 pt-3 rounded bg-gray-200 ">
                                <label className=" text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="email">Email</label>
                                <input name="email" type="text" id="email" ref={register({ required: "Email is Required"})} className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 hover:border-yellow-600 focus:border-red-600 transition duration-500 px-3 pb-3" />
                                {errors.email && 
                                    <div className="bg-white">
                                        <p className="pt-2 text-center text-red-800">{errors.email.message}</p>
                                    </div>
                                }
                            </div>
                            <div className="mb-6 pt-3 rounded bg-gray-200">
                                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">Password</label>
                                <input name="password" type="password" id="password" ref={register({ required: "Password is Required"})} className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 hover:border-yellow-600 focus:border-red-600 transition duration-500 px-3 pb-3" />
                                {errors.password && 
                                    <div className="bg-white">
                                        <p className="pt-2 text-center text-red-800">{errors.password.message}</p>
                                    </div>
                                }
                            </div>
                            <div className="flex justify-end">
                                <p className="text-sm text-yellow-600 hover:text-yellow-700 hover:underline mb-6">Forgot your password?</p>
                            </div>
                            <input className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit" value="Sign in"/>
                        </form>
                    </div>
                </div>

                <div className="max-w-lg mx-auto text-center mt-12 mb-6">
                    <p className="text-white">Don't have an account? <a href="/" className="font-bold hover:underline">Sign up</a>.</p>
                </div>

                <footer className="max-w-lg mx-auto flex justify-center text-white">
                    Copyright © {new Date().getFullYear()}{" "}
                </footer>
            </div>
        </>
    )
}

export default Login