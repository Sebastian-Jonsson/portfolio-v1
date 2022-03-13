import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-blue-800">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact
                    className={(navData) => navData.isActive ? "text-green-400 inline-flex items-center py-6 px-3 mr-4 hover:text-yellow-600 text-4xl font-bold cursive tracking-widest" : "inline-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-yellow-600 text-4xl font-bold cursive tracking-widest" }>
                        Sebastian
                    </NavLink>
                    <NavLink to="/post"
                    className={(navData) => navData.isActive ? "bg-green-600 inline-flex items-center py-3 px-3 my-6 rounded text-blue-100 hover:text-yellow-600 " : "inline-flex items-center py-3 px-3 my-6 rounded text-blue-100 hover:text-yellow-600" }>
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project"
                    className={(navData) => navData.isActive ? "bg-green-600 inline-flex items-center py-3 px-3 my-6 rounded text-blue-100 hover:text-yellow-600 " : "inline-flex items-center py-3 px-3 my-6 rounded text-blue-100 hover:text-yellow-600" }>
                        Project
                    </NavLink>
                    <NavLink to="/about"
                    className={(navData) => navData.isActive ? "bg-green-600 inline-flex items-center py-3 px-3 my-6 rounded text-blue-100 hover:text-yellow-600 " : "inline-flex items-center py-3 px-3 my-6 rounded text-blue-100 hover:text-yellow-600" }>
                        About
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/sebastian-jonsson-1a8264180" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                </div>
            </div>
        </header>
    )
}