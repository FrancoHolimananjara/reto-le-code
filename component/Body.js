import React , { useState } from 'react'
import '../style/framework_css.css'
import './Body.css'

export default function Body() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [mdp, setMdp] = useState("");
    const [confirmmdp, setConfirmmdp] = useState("");

    return (
        <div className="body ">
            <div className="content d-grid mt-12">
                <div className="h-400 col-6-desktop col-6-tablet col-12-mobile box bg-dark">
                    <h1 className="c-ligth uppercase">Resistration</h1>
                    <div className="registration d-flex flex-dir-col">
                        <input type="text" placeholder="Username..." required
                            onChange={(e)=>{
                                setUsername(e.target.value)
                            }}
                        />
                        <input type="email" placeholder="andriamitantsoa36kofra@gmail.com" required
                            onChange={(e)=>{
                                setEmail(e.target.value)
                            }}
                        />
                        <input type="password" placeholder="Password..." required
                            onChange={(e)=>{
                                setMdp(e.target.value)
                            }}
                        />
                        <input type="password" placeholder="Confirm your password.." required
                            onChange={(e)=>{
                                setConfirmmdp(e.target.value)
                            }}
                        />
                        <input className="bg-succes" type="submit" value="Register" required/>
                    </div>
                </div>
                <div className="h-400 col-6-desktop col-6-tablet col-12-mobile box  bg-dark">
                    <h1 className="c-ligth uppercase">Login</h1>
                    <div className="login d-flex flex-dir-col">
                        <input type="text" placeholder="Username..." required/>
                        <input type="password" placeholder="Password..." required/>
                        <input className="bg-succes" type="submit" value="Login" required/>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
