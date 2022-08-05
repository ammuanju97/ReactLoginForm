import React, {useState } from "react";

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
     }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-inner">
                    {(error != "") ? ( <div className="error">{error}</div>) : ""}
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" onChange={e=>setDetails({...details, name:e.target.value})} valuse={details.name}/>

                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" onChange={e=>setDetails({...details, email:e.target.value})} valuse={details.email}/>

                    </div>
                    <div className="form-group">
                        <label htmlFor="password" onChange={e=>setDetails({...details, password:e.target.value})} valuse={details.password}>Password: </label>
                        <input type="password" name="password" id="password" autoComplete="autoComplete"/>

                    </div>
                    {/* <button type="button">Login</button> */}
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;