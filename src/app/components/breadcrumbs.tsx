"use client"

import React from 'react'
import Link from 'next/link'

type BreadCrumbProps = { title: string, paths: string, capitalize?: boolean }

export default function Breadcrumbs({ title, paths, capitalize }: BreadCrumbProps) {
    const pathNames = paths.split('/').filter(path => path)
    return (
        <header className="flex c-between items-center contient-header">
            <div className="contient-title">{title}</div>
            <nav className="breadcrumb">
                {

                    pathNames.map((link, index) => {
                        let href = `/${pathNames.slice(0, index + 1).join('/')}`
                        let itemLink = capitalize ? link[0].toUpperCase() + link.slice(1, link.length).toUpperCase() : link
                        return (
                            <React.Fragment key={index}>

                                <Link href={href}>{itemLink}</Link>
                                {pathNames.length !== index + 1 && <span className="material-symbols-outlined">
                                    chevron_right
                                </span>}
                            </React.Fragment>
                        )
                    })
                }
            </nav>
        </header>
    )
}