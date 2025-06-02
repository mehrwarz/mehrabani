"use client"
import Image from "next/image"
import Link from "next/link"

export default function Sidebar({ props }: any) {

    return (
        <div className="sidebar" data-background-color="dark">
            <div className="sidebar-logo">
                <div className="logo-header" data-background-color="dark">
                    <Link href="/" className="logo">
                        <img src="/assets/images/logo.svg" alt="navbar brand" className="navbar-brand" height="40" />
                    </Link>
                    <div className="nav-toggle">
                        <button className="btn btn-toggle toggle-sidebar">
                            <div className="pb-3 pt-3">
                                <i className="gg-menu-right"></i>
                            </div>
                        </button>
                        <button className="btn btn-toggle sidenav-toggler">
                            <div className="pb-3 pt-3">
                                <i className="gg-menu-left"></i>
                            </div>
                        </button>
                    </div>
                    <button className="topbar-toggler more p-3">
                        <i className="gg-more-vertical-alt"></i>
                    </button>
                </div>
            </div>
            <div className="sidebar-wrapper scrollbar scrollbar-inner">
                <div className="sidebar-content">
                    <ul className="nav nav-secondary">
                        <li className="nav-item active">
                            <Link
                                data-bs-toggle="collapse"
                                href="#dashboard"
                                className="collapsed"
                                aria-expanded="false"
                            >
                                <i className="fas fa-home"></i>
                                <p>Clients</p>
                                <span className="caret"></span>
                            </Link>
                            <div className="collapse" id="dashboard">
                                <ul className="nav nav-collapse">
                                    <li>
                                        <Link href="/workspace/client">
                                            <span className="sub-item">Clients List</span>
                                        </Link>
                                    </li>
                                     <li>
                                        <Link href="/workspace/client/add">
                                            <span className="sub-item">Add New Client</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-section">
                            <span className="sidebar-mini-icon">
                                <i className="fas fa-ellipsis-h"></i>HH
                            </span>
                            <h4 className="text-section">Components</h4>
                        </li>
                        <li className="nav-item">
                            <Link data-bs-toggle="collapse" href="#base">
                                <i className="fas fa-layer-group"></i>
                                <p>Base</p>
                                <span className="caret"></span>
                            </Link>
                            <div className="collapse" id="base">
                                <ul className="nav nav-collapse">
                                    <li>
                                        <Link href="components/avatars.html">
                                            <span className="sub-item">Avatars</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="components/buttons.html">
                                            <span className="sub-item">Buttons</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link data-bs-toggle="collapse" href="#sidebarLayouts">
                                <i className="fas fa-th-list"></i>
                                <p>Sidebar Layouts</p>
                                <span className="caret"></span>
                            </Link>
                            <div className="collapse" id="sidebarLayouts">
                                <ul className="nav nav-collapse">
                                    <li>
                                        <Link href="sidebar-style-2.html">
                                            <span className="sub-item">Sidebar Style 2</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="icon-menu.html">
                                            <span className="sub-item">Icon Menu</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link href="#">
                                <i className="fas fa-file"></i>
                                <p>Documentation</p>
                                <span className="badge badge-secondary">1</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link data-bs-toggle="collapse" href="#submenu">
                                <i className="fas fa-bars"></i>
                                <p>Menu Levels</p>
                                <span className="caret"></span>
                            </Link>
                            <div className="collapse" id="submenu">
                                <ul className="nav nav-collapse">
                                    <li>
                                        <Link data-bs-toggle="collapse" href="#subnav1">
                                            <span className="sub-item">Level 1</span>
                                            <span className="caret"></span>
                                        </Link>
                                        <div className="collapse" id="subnav1">
                                            <ul className="nav nav-collapse subnav">
                                                <li>
                                                    <Link href="#">
                                                        <span className="sub-item">Level 2</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <span className="sub-item">Level 2</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <Link data-bs-toggle="collapse" href="#subnav2">
                                            <span className="sub-item">Level 1</span>
                                            <span className="caret"></span>
                                        </Link>
                                        <div className="collapse" id="subnav2">
                                            <ul className="nav nav-collapse subnav">
                                                <li>
                                                    <Link href="#">
                                                        <span className="sub-item">Level 2</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span className="sub-item">Level 1</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}