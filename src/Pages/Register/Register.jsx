import Lottie from 'lottie-react';
import lotLogin from '../../assets/register.json'
import UseAuth from '../../Hooks/UseAuth';
import { Link } from 'react-router-dom';

const Register = () => {
    const {createUser} = UseAuth();
    const handleRegisterSubmit=(e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoUrl, email, password);
        createUser(email, password)
        .then(result =>{
            console.log(result);
        })
        .catch(error =>{
            console.log(error);
        })


}
    return (
         <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left w-80">
                            <Lottie animationData={lotLogin}></Lottie>
                           
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className="text-5xl font-bold px-3 text-red-500 ">Register now!</h1>
                            <form onSubmit={handleRegisterSubmit} className="card-body">
                                <fieldset className="fieldset">
                                    <label className="fieldset-label">Name</label>
                                    <input name='name' type="text" className="input" placeholder="Name" />
                                    <label className="fieldset-label">Photo Url</label>
                                    <input name='photoUrl' type="url" className="input" placeholder="Photo Url" />
                                    <label className="fieldset-label">Email</label>
                                    <input name='email' type="email" className="input" placeholder="Email" />
                                    <label className="fieldset-label">Password</label>
                                    <input name='password' type="password" className="input" placeholder="Password" />
                                   
                                    <button className="btn bg-red-500 text-white mt-4">Register</button>
                                </fieldset>
                                <p>If, You have an account. Please <Link className="text-green-500 font-bold" to='/login' >Login here</Link>.</p>
                            </form>
                            
                        </div>
                    </div>
                </div>
    );
};

export default Register;