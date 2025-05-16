// "use client"
import Link from "next/link"

export default function SidebarItem({item}: any, index: number) {

    if (item.children) {
        return (
            <li className="has-submenu" key={index}>
                <Link href={item.link} aria-expanded="false" aria-controls={"link" + index}>{item.label}</Link>
                 <span>
                        { item.icon && <i className={item.icon}></i> }
                        {item.title}    
                    </span>
                <ul className="submenu" id={"link" + index} aria-hidden="true">
                    { item.children.map((child: any, index: number) => <SidebarItem key={index} item={child} />) }
                </ul>
            </li>
        ) 
    } else {
        console.log("\n"+JSON.stringify(item))
        return (
            <li key={index}>
                <Link href={item.link || "#"} key={index}>
                    {item.icon && <i className={item.icon}></i>}
                    {item.label}
                </Link>
            </li>
        )
    }
}