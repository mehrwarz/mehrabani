"use client"

import React, { ReactNode } from 'react'
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import path from 'path'

type BreadCrumbProps = {title: string, capitalize?: boolean }

export default function Breadcrumbs({ title, capitalize }: BreadCrumbProps) {
    const paths = usePathname()
    const pathNames = paths.split('/').filter(path => path)
    return (
        <div className="page-header">
            <h4 className="page-title">{title}</h4>
            <ul className="breadcrumbs">
                {
                    pathNames.map((link, index) => {
                        let href = `/${pathNames.slice(0, index + 1).join('/')}`
                        let itemLink = capitalize ? link[0].toUpperCase() + link.slice(1, link.length).toUpperCase() : link
                        return (
                            <React.Fragment key={index}>
                                <li className="nav-item">
                                    <Link href={href}>{itemLink}</Link>
                                </li>
                                {pathNames.length !== index + 1 && <li className="separator">
                                    <i className="icon-arrow-right"> </i>
                                </li>}
                            </React.Fragment>
                        )
                    })
                }
            </ul>
        </div>
    )
}