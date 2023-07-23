import { Navbar, Container, Nav, Form, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
const Header = () => {
    const navigate = useNavigate()
    const logoutHandler = () => {
        localStorage.clear()
        navigate("/login")
    }
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto navbar-wrapper">
                        {
                            localStorage.getItem('user-info') ?
                            <>
                                <Link to="/">Home</Link>
                                <Link to="/add">Add Product</Link>
                                <Link to="/update">Update Product</Link>
                                <Link onClick={logoutHandler}>Logout</Link>
                            </>
                            :
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Signup</Link>
                            </>
                        }
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </>
    )
}

export default Header