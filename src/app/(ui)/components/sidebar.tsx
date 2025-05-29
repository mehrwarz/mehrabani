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
                                <p>Dashboard</p>
                                <span className="caret"></span>
                            </Link>
                            <div className="collapse" id="dashboard">
                                <ul className="nav nav-collapse">
                                    <li>
                                        <Link href="../demo1/index.html">
                                            <span className="sub-item">Dashboard 1</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-section">
                            <span className="sidebar-mini-icon">
                                <i className="fa fa-ellipsis-h"></i>
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
                                    <li>
                                        <Link href="components/gridsystem.html">
                                            <span className="sub-item">Grid System</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="components/panels.html">
                                            <span className="sub-item">Panels</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="components/notifications.html">
                                            <span className="sub-item">Notifications</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="components/sweetalert.html">
                                            <span className="sub-item">Sweet Alert</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="components/font-awesome-icons.html">
                                            <span className="sub-item">Font Awesome Icons</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="components/simple-line-icons.html">
                                            <span className="sub-item">Simple Line Icons</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="components/typography.html">
                                            <span className="sub-item">Typography</span>
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
                            <Link data-bs-toggle="collapse" href="#forms">
                                <i className="fas fa-pen-square"></i>
                                <p>Forms</p>
                                <span className="caret"></span>
                            </Link>
                            <div className="collapse" id="forms">
                                <ul className="nav nav-collapse">
                                    <li>
                                        <Link href="forms/forms.html">
                                            <span className="sub-item">Basic Form</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link data-bs-toggle="collapse" href="#tables">
                                <i className="fas fa-table"></i>
                                <p>Tables</p>
                                <span className="caret"></span>
                            </Link>
                            <div className="collapse" id="tables">
                                <ul className="nav nav-collapse">
                                    <li>
                                        <Link href="tables/tables.html">
                                            <span className="sub-item">Basic Table</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="tables/datatables.html">
                                            <span className="sub-item">Datatables</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link data-bs-toggle="collapse" href="#maps">
                                <i className="fas fa-map-marker-alt"></i>
                                <p>Maps</p>
                                <span className="caret"></span>
                            </Link>
                            <div className="collapse" id="maps">
                                <ul className="nav nav-collapse">
                                    <li>
                                        <Link href="maps/googlemaps.html">
                                            <span className="sub-item">Google Maps</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="maps/jsvectormap.html">
                                            <span className="sub-item">Jsvectormap</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link data-bs-toggle="collapse" href="#charts">
                                <i className="far fa-chart-bar"></i>
                                <p>Charts</p>
                                <span className="caret"></span>
                            </Link>
                            <div className="collapse" id="charts">
                                <ul className="nav nav-collapse">
                                    <li>
                                        <Link href="charts/charts.html">
                                            <span className="sub-item">Chart Js</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="charts/sparkline.html">
                                            <span className="sub-item">Sparkline</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link href="widgets.html">
                                <i className="fas fa-desktop"></i>
                                <p>Widgets</p>
                                <span className="badge badge-success">4</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="../../documentation/index.html">
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