import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <NavLink
                                to="/post-list"
                                className="nav-link px-3"
                                style={({ isActive }) => ({
                                    color: isActive ? "blue" : "whitesmoke",
                                })}>
                                Posts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/create-post"
                                className="nav-link px-3"
                                style={({ isActive }) => ({
                                    color: isActive ? "blue" : "whitesmoke",
                                })}>
                                createPost
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header