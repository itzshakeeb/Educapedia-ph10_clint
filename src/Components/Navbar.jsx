import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authUser } from '../Context/UserContext';

const Navbar = () => {
    const { user } = useContext(authUser)
    console.log(user);
    return (
        <div className="navbar bg-base-100 container">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Educapedia</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink to='/courses'>Courses</NavLink></li>
                    <li><NavLink to='/faq'>FAQ</NavLink></li>
                    <li><NavLink to='/blog'>Blog</NavLink></li>
                </ul>
            </div>
            <div className="flex-none">
                {user ?
                    <div className="tooltip tooltip-bottom" data-tip={user}>
                        <label className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="" alt='img' />
                            </div>
                        </label>
                    </div>
                    : <Link to='/login'><button className='btn btn-outline mx-3'>Login</button></Link>}
            </div>
        </div>
    );
};

export default Navbar;