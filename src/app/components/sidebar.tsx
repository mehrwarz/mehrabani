"use client";

import { useEffect, useState, useRef } from "react";
export default function Sidebar() {
    
    return (
        <>
            <button className="toggle-btn">
                <i className="icofont-curved-double-left"></i>
            </button>
            <aside className="sidebar">
                <div className="sidebar-header">
                    <h2>CodingLab</h2>
                </div>
                <ul className="sidebar-links">
                    <h4>
                        <span>Main Menu</span>
                        <div className="menu-separator"></div>
                    </h4>
                    <li>
                        <a href="#">Dashboard</a>
                    </li>
                    <li>
                        <a href="#">Overview</a>
                    </li>
                    <li>
                        <a href="#">Analytic</a>
                    </li>
                    <h4>
                        <span>General</span>
                        <div className="menu-separator"></div>
                    </h4>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">Groups</a>
                    </li>
                    <li>
                        <a href="#">Transfer</a>
                    </li>
                    <li>
                        <a href="#">All Reports</a>
                    </li>
                    <li>
                        <a href="#">Notifications</a>
                    </li>
                    <li className="drop-down">
                        <a href="#">
                            Projects                            
                        </a>
                        <ul className="sub-menu">
                            <li><a href="#">Project 1</a></li>
                            <li><a href="#">Project 2</a></li>
                        </ul>
                    </li>
                    
                    <h4>
                        <span>Account</span>
                        <div className="menu-separator"></div>
                    </h4>
                    <li>
                        <a href="#">Profile</a>
                    </li>
                    <li>
                        <a href="#">Settings</a>
                    </li>
                </ul>
            </aside>
        </>
    );
}