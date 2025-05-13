import Script from "next/script";
import "./../CSS/DashboardLayout.css"
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Dashboard - Mehrabani',
  description: 'Manage your application settings on Mehrabani.',
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>

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
            <aside className="sidebar">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li className="has-submenu">
                        <a href="#" aria-expanded="false" aria-controls="submenu-services">Services ▾</a>
                        <ul className="submenu" id="submenu-services" aria-hidden="true">
                            <li><a href="#">Service 1</a></li>
                            <li><a href="#">Service 2</a></li>
                            <li><a href="#">Service 3</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </aside>
            <main className="contient">
                {children}
            </main>
            <Script src="/JS/DashboardLayout.js" />
        </>
    )
}