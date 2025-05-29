"use client"

import React from 'react'
import Link from 'next/link'

type BreadCrumbProps = {title: string, paths:string, capitalize?: boolean }

export default function Breadcrumbs({ title, paths, capitalize }: BreadCrumbProps) {
    const pathNames = paths.split('/').filter(path => path)
    return (
        <div className="page-header d-flex justify-content-between">
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