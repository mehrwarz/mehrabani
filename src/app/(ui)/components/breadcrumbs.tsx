"use client"
import { headers } from "next/headers";
import Link from "next/link"

export default function Breadcrumbs({ params }: any) {

    const headersListCorrect = headers();
    const xInvokePath = headersListCorrect.get('x-invoke-path');
    const nextUrl = headersListCorrect.get('next-url');
    const fullPathname = xInvokePath || nextUrl || '/';
    const splitResult = fullPathname.split('/');
    const pathSegments = splitResult.filter(segment => segment);

    console.log(pathSegments)
    console.log( window.location.href)
    const title = params.title;
    const tabs = [...params.tabs];
    
    return (
        <div className="title-wrapper pt-30">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="title">
                        <h2> {title} </h2>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="breadcrumb-wrapper">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                {tabs.map((elm, index) =>
                                    (index + 1) == tabs.length ?
                                        <li className="breadcrumb-item active" key={index}>
                                            {elm.tab}
                                        </li> :
                                        <li className="breadcrumb-item active" key={index}>
                                            <Link href={elm.link}>{elm.tab}</Link>
                                        </li>
                                )}
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}