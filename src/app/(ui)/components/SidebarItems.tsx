// "use client"
import Link from "next/link"

export default function SidebarItem(menue: any, index: number) {
 
    if (menue.children) {
        return (
            <li className="has-submenu" key={index}>
                <Link href={menue.link} aria-expanded="false" aria-controls={"link" + index}>Services</Link>
                <ul className="submenu" id={"link" + index} aria-hidden="true">
                    {menue.children.map((menues: any, index: number)=> SidebarItem(menues,index))}
                </ul>
            </li>
        ) 
    } else {
        return (
            <li key={index}>
                <Link href={menue.item.link || "#"} key={index}>
                    {menue.item.icon && <i className={menue.item.icon}></i>}
                    {menue.item.label}
                </Link>
            </li>
        )
    }
}