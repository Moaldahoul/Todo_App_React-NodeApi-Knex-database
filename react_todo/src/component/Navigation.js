import React from "react";
import { Link } from "react-router-dom";

const Navigation = () =>{
    return(
        <div>
        <nav className='navbar navbar-inverse bg-inverse mb-4'>
            <Link to='/' className="navbar-brand"> Todo </Link>
        </nav>
        <div className="navbar fixed-bottom"  >
        <Link to='/new' className="btn btn-outline-primary w-75 p-3">Add New Task </Link>
        </div>

        </div>
    );
};

export default Navigation;