import "./style.css"
export default function Dashboard({ children }: { children: React.ReactNode }) {
    return (
        <>
            <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav flex-row d-md-none">
                        <li className="nav-item text-nowrap">
                            <button className="nav-link px-3 text-white" type="button"
                                data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <i className="icofont-navigation-menu"></i>
                            </button>
                        </li>
                        <li className="nav-item text-nowrap">
                            <button className="nav-link px-3 text-white" type="button"
                                data-bs-toggle="collapse" data-bs-target="#navbarSearch" aria-controls="navbarSearch" aria-expanded="false"
                                aria-label="Toggle search">
                                <i className="icofont-search-document"></i>
                            </button>
                        </li>
                    </ul>
                    <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="#">Company name</a>
                    <div id="navbarSearch" className="navbar-search w-100 collapse">
                        <input className="form-control w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search" />
                    </div>
                </div>
            </header>

            <div className="container-fluid">
                <div className="row">
                    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
                        <div className="offcanvas-md offcanvas-start bg-body-tertiary" tabIndex={-1} id="sidebarMenu"
                            aria-labelledby="sidebarMenuLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
                                <button type="button" className="btn btn-outline-danger ms-auto" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close">
                                    <i className="icofont-close"></i>
                                </button>
                            </div>
                            <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link d-flex align-items-center gap-2 active"
                                            aria-current="page" href="#">
                                            Dashboard
                                        </a> </li>
                                    <li className="nav-item">
                                        <a className="nav-link d-flex align-items-center gap-2" href="#">
                                            Orders
                                        </a> </li>
                                    <li className="nav-item"> <a className="nav-link d-flex align-items-center gap-2" href="#">
                                        Products
                                    </a> </li>
                                    <li className="nav-item"> <a className="nav-link d-flex align-items-center gap-2" href="#">
                                        Customers
                                    </a> </li>
                                    <li className="nav-item"> <a className="nav-link d-flex align-items-center gap-2" href="#">
                                        Reports
                                    </a> </li>
                                    <li className="nav-item"> <a className="nav-link d-flex align-items-center gap-2" href="#">
                                        Integrations
                                    </a> </li>
                                </ul>
                                <h6
                                    className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                                    <span>Saved reports</span> <a className="link-secondary" href="#" aria-label="Add a new report">
                                    </a> </h6>
                                <ul className="nav flex-column mb-auto">
                                    <li className="nav-item"> <a className="nav-link d-flex align-items-center gap-2" href="#">
                                        Current month
                                    </a> </li>
                                    <li className="nav-item"> <a className="nav-link d-flex align-items-center gap-2" href="#">
                                        Last quarter
                                    </a> </li>
                                    <li className="nav-item"> <a className="nav-link d-flex align-items-center gap-2" href="#">
                                        Social engagement
                                    </a> </li>
                                    <li className="nav-item"> <a className="nav-link d-flex align-items-center gap-2" href="#">
                                        Year-end sale
                                    </a> </li>
                                </ul>
                                <hr className="my-3" />
                                <ul className="nav flex-column mb-auto">
                                    <li className="nav-item"> <a className="nav-link d-flex align-items-center gap-2" href="#">
                                        Settings
                                    </a> </li>
                                    <li className="nav-item"> <a className="nav-link d-flex align-items-center gap-2" href="#">
                                        Sign out
                                    </a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Dashboard</h1>
                            <div className="btn-toolbar mb-2 mb-md-0">
                                <div className="btn-group me-2">
                                    <button type="button"
                                        className="btn btn-sm btn-outline-secondary">Share</button>
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                                </div>
                                <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1"> This week </button>
                            </div>
                        </div>
                        <h2>Section title</h2>
                    </main>
                </div>
            </div>

        </>
    )
}