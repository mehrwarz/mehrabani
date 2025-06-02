"use client";

import { useEffect, useState, useRef } from "react";
export default function Sidebar() {
    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const [isSubmenuActive, setIsSubmenuActive] = useState(false);
    const sidebarRef = useRef(null); const toggleButtonRef = useRef(null);
    useEffect(() => {
        if (typeof document !== 'undefined') {
            if (isSidebarActive) {
                document.body.classList.add('sidebar-open');
            } else {
                document.body.classList.remove('sidebar-open');
            }
        }
    }, [isSidebarActive]);
    const toggleSidebar = () => {
        setIsSidebarActive(prev => !prev);
    };

    const toggleSubmenu = (e) => {
        if (e.target.tagName === 'A' || e.target.closest('a')) {
            e.preventDefault();
        }
        setIsSubmenuActive(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event: { target: any; }) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target) &&
                toggleButtonRef.current && !toggleButtonRef.current.contains(event.target)) {
                setIsSidebarActive(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isSidebarActive) {
                setIsSidebarActive(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isSidebarActive]);
    return (
        <>
            <button ref={toggleButtonRef} className="toggle-btn" onClick={toggleSidebar} aria-expanded={isSidebarActive}>
                <span className="material-symbols-outlined">{isSidebarActive ? 'keyboard_double_arrow_left' : 'keyboard_double_arrow_right'}</span>
            </button>
            <aside ref={sidebarRef} className={`sidebar ${isSidebarActive ? 'active' : ''}`}>
                <div className="sidebar-header">
                    <img src="/assets/images/logo.svg" alt="logo" />
                    <h2>CodingLab</h2>
                </div>
                <ul className="sidebar-links">
                    <h4>
                        <span>Main Menu</span>
                        <div className="menu-separator"></div>
                    </h4>
                    <li>
                        <a href="#">
                            <span className="material-symbols-outlined"> dashboard </span>Dashboard</a>
                    </li>
                    <li>
                        <a href="#"><span className="material-symbols-outlined"> overview </span>Overview</a>
                    </li>
                    <li>
                        <a href="#"><span className="material-symbols-outlined"> monitoring </span>Analytic</a>
                    </li>
                    <h4>
                        <span>General</span>
                        <div className="menu-separator"></div>
                    </h4>
                    <li>
                        <a href="#"><span className="material-symbols-outlined"> folder </span>Projects</a>
                    </li>
                    <li>
                        <a href="#"><span className="material-symbols-outlined"> groups </span>Groups</a>
                    </li>
                    <li>
                        <a href="#"><span className="material-symbols-outlined"> move_up </span>Transfer</a>
                    </li>
                    <li>
                        <a href="#"><span className="material-symbols-outlined"> flag </span>All Reports</a>
                    </li>
                    <li>
                        <a href="#"><span className="material-symbols-outlined">
                            notifications_active </span>Notifications</a>
                    </li>
                    <h4>
                        <span>Account</span>
                        <div className="menu-separator"></div>
                    </h4>
                    <li>
                        <a href="#"><span className="material-symbols-outlined"> account_circle </span>Profile</a>
                    </li>
                    <li>
                        <a href="#"><span className="material-symbols-outlined"> settings </span>Settings</a>
                    </li>
                    <li>
                        <a href="#"><span className="material-symbols-outlined"> logout </span>Logout</a>
                    </li>
                    <li className={`submenu ${isSubmenuActive ? 'active' : ''}`}>
                        <a href="#" onClick={toggleSubmenu}>
                            <span className="material-symbols-outlined">folder</span>Projects
                            <span className="material-symbols-outlined expand-icon">
                                {isSubmenuActive ? 'expand_less' : 'expand_more'}
                            </span>
                        </a>
                        <ul className="sub-menu">
                            <li><a href="#">Project 1</a></li>
                            <li><a href="#">Project 2</a></li>
                        </ul>
                    </li>
                </ul>
            </aside>
        </>
    );
}