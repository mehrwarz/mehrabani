"use client";

import { useEffect, useState, useRef } from "react";
export default function Sidebar() {
    
    return (
        <>
        <nav className="sidebar d-none d-md-block">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Service 1</a></li>
                        <li><a className="dropdown-item" href="#">Service 2</a></li>
                        <li><a className="dropdown-item" href="#">Service 3</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                 <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Service 1</a></li>
                        <li><a className="dropdown-item" href="#">Service 2</a></li>
                        <li><a className="dropdown-item" href="#">Service 3</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Service 1</a></li>
                        <li><a className="dropdown-item" href="#">Service 2</a></li>
                        <li><a className="dropdown-item" href="#">Service 3</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Service 1</a></li>
                        <li><a className="dropdown-item" href="#">Service 2</a></li>
                        <li><a className="dropdown-item" href="#">Service 3</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Service 1</a></li>
                        <li><a className="dropdown-item" href="#">Service 2</a></li>
                        <li><a className="dropdown-item" href="#">Service 3</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
            </ul>
        </nav>

        <div className="offcanvas offcanvas-start bg-dark text-white" tabIndex={-1} id="mobileSidebar" aria-labelledby="mobileSidebarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="mobileSidebarLabel">Menu</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body p-0">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Service 1</a></li>
                            <li><a className="dropdown-item" href="#">Service 2</a></li>
                            <li><a className="dropdown-item" href="#">Service 3</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Service 1</a></li>
                            <li><a className="dropdown-item" href="#">Service 2</a></li>
                            <li><a className="dropdown-item" href="#">Service 3</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Service 1</a></li>
                            <li><a className="dropdown-item" href="#">Service 2</a></li>
                            <li><a className="dropdown-item" href="#">Service 3</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Service 1</a></li>
                            <li><a className="dropdown-item" href="#">Service 2</a></li>
                            <li><a className="dropdown-item" href="#">Service 3</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Service 1</a></li>
                            <li><a className="dropdown-item" href="#">Service 2</a></li>
                            <li><a className="dropdown-item" href="#">Service 3</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}