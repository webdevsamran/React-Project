import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Header from "./Header"
import { Table } from "react-bootstrap"

const Home = () => {
    const [ data, setData ] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        if(!localStorage.getItem('user-info')){
            navigate("/login")
        }
        callTheProducts()
    },[])
    const callTheProducts = async () => {
        let result = await fetch('http://127.0.0.1:8000/api/all',{
            method:'get'
        })
        result = await result.json()
        setData(result)
    }
    let start = 0
    const deleteProduct = async (i) => {
        let result = await fetch(`http://127.0.0.1:8000/api/delete/${i}`,{
            method:'get'
        })
        result = await result.json()
        if(result){
            alert('Product Deleted')
        }else{
            alert('Product Not Deleted')
        }
        callTheProducts()
    }
    console.log(data)
    return (
        <>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1 className="text-center">List of Products</h1>
                <Table striped hover className="table-primary">
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Name</th>
                            <th>File</th>
                            <th>Price</th>
                            {/* <th>Description</th> */}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (data) ?
                                data.map((product,index) => (
                                    <>
                                        <tr key={index}>
                                            <td>{++start}</td>
                                            <td>{product.name}</td>
                                            <td>{product.file}</td>
                                            <td>{product.price}</td>
                                            {/* <td>{product.description}</td> */}
                                            <td><Link onClick={() => deleteProduct(product.id)}>Delete</Link>&nbsp;&nbsp;<Link to={`/update/${product.id}`}>Update</Link></td>
                                        </tr>
                                    </>
                                ))
                            :
                                    <>
                                        <h2>No Data Found</h2>
                                    </>
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}
export default Home