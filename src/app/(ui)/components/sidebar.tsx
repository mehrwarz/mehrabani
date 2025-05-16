"use client"

import SidebarItem from "./SidebarItems"

export default function Sidebar({props}: any[]):React.ReactNode {
    return (
        <aside className="sidebar">
            <ul>
               {props.map((item: any, index: number)=> <SidebarItem key={index} item={item} />) }
            </ul>
        </aside>
    )
}