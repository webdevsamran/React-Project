import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from './Header'
const Register = () => {
    const [ name, setName ] = useState()
    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()
    const navigate = useNavigate()
    const signUp = async () => {
        let item = {name,email,password}
        let result = await fetch('http://127.0.0.1:8000/api/register',{
            method:'post',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        })
        result = await result.json()
        localStorage.setItem('user-info',JSON.stringify(result))
        navigate("/")
    }
    useEffect(() => {
        if(localStorage.getItem('user-info')){
            navigate("/")
        }
    },[])
    return (
        <>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1 className="text-center">Register Page</h1>
                <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter your Name" />
                <br />
                <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter your Email" />
                <br />
                <input type="password"  onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter your Password" />
                <br />
                <button className="btn btn-primary" onClick={signUp}>Register</button>
            </div>
        </>
    )
}

export default Register