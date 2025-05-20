"use client"
import naveMenue from "@/data/navmenue"
import Link from "next/link"

export default function Navbar(){
    return (
        <header className="header-nav">
                <button className="toggle-sidebar">☰</button>
                <a href="#" className="navbar-brand">Dashboard</a>
                <nav>
                    <div className="navbar-actions">
                        { naveMenue.map((item, index) => <Link href={item.url} key={index}>{item.label}</Link>)}
                    </div>
                </nav>
            </header>
    )
}