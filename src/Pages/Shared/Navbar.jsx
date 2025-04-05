import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import logo from '../../assets/icon.png'
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {

    const { user, singOutUser } = UseAuth();

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/allFood'}>All Foods</NavLink></li>
        <li><NavLink to={'/gallery'}>Gallery</NavLink></li>
       


    </>

    const handleSingOut = () => {
        singOutUser()
            .then(result => {
                console.log(result);
            }).catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"> <img className='w-8' src={logo} alt="" /> Mz Restaurant </a>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="mr-4">
                    {
                        user ? <div className="flex flex-col gap-2">
                            

                            <button className="" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                            <img className=" w-[40px] h-[40px] rounded-full" src={user?.photoURL} alt="img" />
                                <h1 className="text-xl font-semibold">{user?.displayName}</h1>
                            </button>

                            <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                                popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>
                                <li><NavLink to={'/addFood'}>Add Food</NavLink></li>
                                <li><NavLink to={'/myOrder'}>My Order</NavLink></li>
                                <li><NavLink to={'/myAddedFood'}>My Food</NavLink></li>
                            </ul>

                        </div> : <FaUserCircle className="text-4xl mr-2" />
                    }
                </div>
                <div>
                    {
                        user ? <button className='btn bg-red-500 text-white' onClick={handleSingOut}>SignOut</button> : <><div>
                            <Link to={"/login"} className="btn mr-2 bg-green-500 text-white">Login</Link>
                            <Link to={"/register"} className="btn bg-red-500 text-white">Register</Link>
                        </div></>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;