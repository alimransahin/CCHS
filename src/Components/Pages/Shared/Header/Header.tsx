import React from 'react';
import { ExternalLink } from 'react-external-link';
import { Link } from 'react-router-dom';

const Header = () => {
    const menuItems = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li tabIndex={0}>
            <Link to='/' className="justify-between">
                Result
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
            </Link>
            <ul className="p-2 bg-base-100 z-10">
                <li><Link to='/'>Institute Result</Link></li>
                <li>
                    <ExternalLink href='https://eboardresults.com/v2/home'>Board Result</ExternalLink></li>
            </ul>
        </li>
        <li><Link to='/admission'>Admission</Link></li>
        <li><Link to='/'>Contact</Link></li>
    </React.Fragment>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/'><img className='w-16' src="https://i.ibb.co/0Zwf0Xq/logo.png" alt="logo" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost">
                        Theme
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Light</Link></li>
                        <li><Link to='/'>Item 1</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;