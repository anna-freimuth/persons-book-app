import React from 'react'
import {NavLink} from "react-router-dom";

const Navigation = () => {

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink exact={true} to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact={true} to="/persons">All Persons</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/persons/add">Add Person</NavLink>
                    </li>

                </ul>
            </div>

        </nav>
    )
}

export default Navigation