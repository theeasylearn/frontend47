import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';

function Login() {
    //create 2 state variable
    let [email,setEmail] = useState('');
    let [password,setPassword] = useState('');

    //create function using 2nd method 
    let doLogin = function(e){
        e.preventDefault(); //prevent refreshing webpage
        console.log(email,password);
    }
    return (<div className="container">
        <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
                <div className="card">
                    <div className="card-body p-4">
                        <h1 className="h4 mb-4 text-center">Sign in</h1>
                        <form onSubmit={doLogin}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" name="email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                                <div className="invalid-feedback">Please enter a valid email.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={6} required />
                                <div className="invalid-feedback">Password is required (min 6 characters).</div>
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Login />)