import Lottie from 'lottie-react';
import React from 'react';
import lotLogin from '../../assets/signIn.json'
import UseAuth from '../../Hooks/UseAuth';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const {loginUser,singInWithGoogle} = UseAuth();


    const handleSubmit=(e) =>{
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            console.log(email, password);

            loginUser(email, password)
            .then(result =>{
                console.log(result);
            }).catch(error=>{
                console.log(error)
            })

    };
    const singInGoogle = () => {
        singInWithGoogle()
            .then(result => {
                console.log(result.user);
                // navigate("/");
            })
            .catch(error => {
                console.log('ERROR', error.message);
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-80">
                    <Lottie animationData={lotLogin}></Lottie>
                   
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-5xl font-bold px-3 text-green-500">Login now!</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn bg-green-500 text-white mt-4">Login</button>

                        </fieldset>
                        <button onClick={singInGoogle} className='btn text-green-800'><FaGoogle /> Google</button>
                         <p>If, You don't have an account. Please <Link className="text-red-500 font-bold" to='/register' >Register here</Link>.</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;