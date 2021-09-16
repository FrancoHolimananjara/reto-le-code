import React from 'react'
import '../style/framework_css.css'
import './Navbar.css'
export default function Navbar() {
    return (
        <nav className="navbar bg-dark">
            <div className="navbar-content d-flex jtc-sa">
                <div className="navbar-logo c-ligth">
                    <h3 className="logo mt-15">
                        Logo
                    </h3>
                </div>
                <div className="navbar-link">
                    <u className="link d-flex c-ligth mt-15">
                        <li className="items active hover">
                            <p>Accueill</p>
                        </li>
                        <li className="items ml-10 hover">
                            <p>Contact</p>
                        </li>
                        <li className="items ml-10 hover">
                            <p>Login</p>
                        </li>
                    </u>
                </div>
            </div>
        </nav>
    )
}
