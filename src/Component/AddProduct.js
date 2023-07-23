import { useNavigate } from 'react-router-dom'
import Header from './Header'
import { useEffect, useState } from 'react'
const AddProduct = () => {
    const [ name, setName ] = useState()
    const [ file, setFile ] = useState()
    const [ price, setPrice ] = useState()
    const [ description, setDescription ] = useState()
    const navigate = useNavigate()
    const addProduct = async () => {
        let item = {name,file,price,description}
        let result = await fetch('http://127.0.0.1:8000/api/add',{
            method:'post',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        })
        result = await result.json()
        if(result){
            alert('Product added Successfully')
            navigate('/')
        }
    }
    useEffect(() => {
        if(!localStorage.getItem('user-info')){
            navigate("/login")
        }
    },[])
    return (
        <>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1 className="text-center">Add Product Page</h1>
                <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter Product Name" />
                <br/>
                <input type="file" onChange={(e) => setFile(e.target.files[0].name)} className="form-control" placeholder="Upload Product Image" />
                <br />
                <input type="text" onChange={(e) => setPrice(e.target.value)} className="form-control" placeholder="Enter Product Price" />
                <br />
                <textarea className="form-control" onChange={(e) => setDescription(e.target.value)} placeholder="Enter Description" >
                </textarea>
                <br />
                <button className="btn btn-primary" onClick={addProduct}>Add Product</button>
            </div>
        </>
    )
}

export default AddProduct