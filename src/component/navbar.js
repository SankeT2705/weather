
import React from "react";
import { useState } from "react";
const Navbar = ({ city }) => {
    const [name, setName] = useState('')
    const handleInput = (event) => {
        setName(event.target.value);
    }
    const submit = (event) => {
        event.preventDefault()
        city(name);
        console.log(name)
    }

    return (<div>
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">Weather</a>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Enter Your city" value={name} onChange={handleInput} aria-label="Search" />
                    <button className="btn btn-outline-success" onClick={submit} type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>)
}
export default Navbar;