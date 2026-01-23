import React from "react";
import { Link } from "react-router-dom";

function Navigation(){
     return(
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div>
                        <Link className="text-2xl font-semibold text-gray-600 hover:underline" to='/'>Ahmad Fillah Alwy</Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8" id="navbar-default">
                        <Link to='/' className="font-medium text-gray-600 hover:text-gray-700 hover:bg-gray-100 p-2 my-1 rounded-md transition-color text-lg">Home</Link>
                        <Link to='/profile' className="font-medium text-gray-600 hover:text-gray-700 hover:bg-gray-100 p-2 my-1 rounded-md transition-color text-lg">Projects</Link>
                        <Link to='/blogs' className="font-medium text-gray-600 hover:text-gray-700 hover:bg-gray-100 p-2 my-1 rounded-md transition-color text-lg">Blogs</Link>
                    </div>
                </div>
            </div>
        </nav>
     )
}

export default Navigation;