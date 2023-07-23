import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Protected = (props) => {
    let Cmp = props.Cmp
    const navigate = useNavigate()
    useEffect(() => {
        if(!localStorage.getItem('user-info')){
            navigate("/login")
        }
    },[])
    return (
        <>
            <Cmp />
        </>
    )
}

export default Protected