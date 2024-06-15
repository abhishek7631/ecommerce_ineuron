import React, { useState } from 'react'
import "./Navbar.css"
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const [searchText, setSearchText] = useState()
    const navigate = useNavigate()
    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    const searchButtonHandler = (e) => {
        e.preventDefault()
        navigate({ pathname: "/search", search: `?item=${searchText}` })
    }

    const auth = sessionStorage.getItem('token')

    const logout = () => {
        sessionStorage.clear();
        navigate('/login');
    }

    let current_path = useLocation().pathname
    console.log(current_path)

    return (
        <div className="main-navbar shadow-sm sticky-top">
            <div className="top-navbar">
                <div className="container-fluid">
                    <div className="row" style={{ justifyContent: 'space-between' }}>
                        <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                            <h5 className="brand-name"><Link to="/" className='logo'>Foxy Fashion</Link></h5>
                        </div>
                        {auth && <div className="col-md-5 my-auto">
                            <form role="search">
                                <div className="input-group">
                                    <input type="search" placeholder="Search your product" className="form-control" onChange={(e) => setSearchText(e.target.value)} />
                                    <button className="btn bg-white" type="submit" onClick={searchButtonHandler}>
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                        }
                        
                            <div className="col-md-5 my-auto">
                                <ul className="nav justify-content-end">
                                {auth ?<>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/cart">
                                            <i className="fa fa-shopping-cart"></i> Cart ({totalQuantity})
                                        </Link>
                                    </li>

                                    <li className="nav-item" onClick={logout}>
                                        <a className="nav-link" href="/login" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Logout
                                        </a>
                                    </li>
                                    </> :
                                    <li className="nav-item">
                                        {(current_path == "/" || current_path == "/login") && !auth ? <Link className="nav-link" to="/signup">
                                            Register
                                        </Link> : <Link className="nav-link" to="/login">
                                            Login
                                        </Link>
}
                                    </li>
                                }
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
            {/* <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand d-block d-sm-block d-md-none d-lg-none" href="/">
                        Funda Ecom
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav> */}
        </div>
    )
}

export default Navbar
