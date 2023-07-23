import { useEffect, useState } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()
    const navigate = useNavigate()
    const login = async () => {
        let item = {email,password}
        let result = await fetch('http://127.0.0.1:8000/api/login',{
            method:'post',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        })
        result = await result.json()
        if(result.status){
            alert("Your Credentials are Wrong")
        }else{
            localStorage.setItem('user-info',JSON.stringify(result))
            navigate("/")
        }
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
                <h1 className="text-center">Login Page</h1>
                <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter your Email" />
                <br />
                <input type="password"  onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter your Password" />
                <br />
                <button className="btn btn-primary" onClick={login}>Login</button>
            </div>
        </>
    )
}

export default Login