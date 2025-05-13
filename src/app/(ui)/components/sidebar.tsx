"use client"

export default function Sidebar(){
    return (
        <aside className="sidebar">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li className="has-submenu">
                        <a href="#" aria-expanded="false" aria-controls="submenu-services">Services</a>
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
    )
}