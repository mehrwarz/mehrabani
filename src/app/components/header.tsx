"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Header() {
    const [isNavbarActive, setIsNavbarActive] = useState(false);
    const [isDropdownActive, setIsDropdownActive] = useState(false); 

    const navbarRef = useRef(null);
    const toggleButtonRef = useRef(null);
    const dropdownRef = useRef(null); 

    const toggleNavbar = () => {
        setIsNavbarActive(prev => !prev);
        
        if (isNavbarActive) {
            setIsDropdownActive(false);
        }
    };

    const toggleDropdown = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); 
        setIsDropdownActive(prev => !prev);
    };
    
    useEffect(() => {
        const handleClickOutside = (event: { target: any; }) => {            
            if (
                navbarRef.current && !navbarRef.current.contains(event.target) &&
                toggleButtonRef.current && !toggleButtonRef.current.contains(event.target)
            ) {
                setIsNavbarActive(false); 
                setIsDropdownActive(false); 
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isNavbarActive, isDropdownActive]); 
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && (isNavbarActive || isDropdownActive)) {
                setIsNavbarActive(false);
                setIsDropdownActive(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isNavbarActive, isDropdownActive]); 

    return (
        <header ref={navbarRef} className={`navbar ${isNavbarActive ? 'active' : ''}`}>
            <div className="nav-brand">
                <Image src="/assets/images/logo.svg" alt="Company Logo" width={40} height={30} />
            </div>
            <nav className="nav-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Features</a></li>
                    <li className={`dropdown-container ${isDropdownActive ? 'active' : ''}`} ref={dropdownRef}>
                        <a href="#" onClick={toggleDropdown}>
                            Services
                            <span className="material-symbols-outlined expand-icon">
                                expand_more
                            </span>
                        </a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">App Development</a></li>
                            <li><a href="#">Data Intigration</a></li>
                            <li><a href="#">System Security</a></li>
                            <li><a href="#">SEO Optimization</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <button ref={toggleButtonRef} className="sidebar-toggle-btn" onClick={toggleNavbar} aria-expanded={isNavbarActive}>
                <span className="material-symbols-outlined">
                    {isNavbarActive ? 'keyboard_double_arrow_up' : 'keyboard_double_arrow_down'}
                </span>
            </button>
        </header>
    );
}