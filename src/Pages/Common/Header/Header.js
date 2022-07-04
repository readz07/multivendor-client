import React from 'react';
import { Link } from "react-router-dom";
const Header = () => {
    const topNav = <>
        
        <li tabindex="0">
            <a className="justify-between">
                All Categories
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
            </a>
            <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
            </ul>
        </li>
        <li><Link to='/'> Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/profile'>My Profile</Link></li>
        <li><a>Today's Deal</a></li>
        <li><a>Coupon</a></li>
        <li><a>Customer Care</a></li>
        <li><a>Become Seller</a></li>
        <li><a>Help?</a></li>

    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {topNav}
                    </ul>
                </div>
                <p className="btn btn-ghost normal-case text-xl">B2B</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {topNav}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/signin' className='btn btn-sm mr-2'>Sign In</Link>
                <Link to='/signup' className='btn btn-sm'>Sign Up</Link>
            </div>
        </div>
    );
};

export default Header;