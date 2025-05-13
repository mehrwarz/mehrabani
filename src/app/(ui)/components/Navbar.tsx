"use client"

export default function Navbar(){
    return (
        <header>
                <button className="toggle-sidebar">☰</button>
                <a href="#" className="navbar-brand">Dashboard</a>
                <nav>
                    <div className="navbar-actions">
                        <button>Notifications</button>
                        <a href="#">Profile</a>
                    </div>
                </nav>
            </header>
    )
}