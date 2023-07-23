import { useNavigate, useParams } from 'react-router-dom'
import Header from './Header'
import { useEffect, useState } from 'react'
const UpdateProduct = () => {
    const [ name, setName ] = useState()
    const [ file, setFile ] = useState()
    const [ price, setPrice ] = useState()
    const [ description, setDescription ] = useState()
    const navigate = useNavigate()
    const params = useParams()
    useEffect(() => {
        if(!localStorage.getItem('user-info')){
            navigate("/login")
        }
        getProductDetails()
    },[])
    const getProductDetails = async () => {
        let result = await fetch(`http://127.0.0.1:8000/api/getP/${params.id}`,{
            method:'get'
        })
        result = await result.json()
        setName(result.name)
        setFile(result.file)
        setPrice(result.price)
        setDescription(result.description)
    }
    const UpdateProduct = async () => {
        let item = {name,file,price,description}
        let result = await fetch(`http://127.0.0.1:8000/api/update/${params.id}`,{
            method:'put',
            body: JSON.stringify(item),
            headers:{
                'Content-Type':'application/json',
                "Accept":"application/json"
            }
        })
        let data = await result.json()
        if(data.id){
            alert('Product Successfully Updated')
            navigate('/')
        }
    }
    return (
        <>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1 className="text-center">Update Product Page</h1>
                <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter Product Name" value={name} />
                <br/>
                <input type="file" onChange={(e) => setFile(e.target.files[0].name)} className="form-control" placeholder="Upload Product Image" /><span>{file}</span>
                <br />
                <input type="text" onChange={(e) => setPrice(e.target.value)} className="form-control" placeholder="Enter Product Price" value={price} />
                <br />
                <textarea className="form-control" onChange={(e) => setDescription(e.target.value)} placeholder="Enter Description" value={description} >
                </textarea>
                <br />
                <button className="btn btn-primary" onClick={UpdateProduct}>Update Product</button>
            </div>
        </>
    )
}

export default UpdateProduct