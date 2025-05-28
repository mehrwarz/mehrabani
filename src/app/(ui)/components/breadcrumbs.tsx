"use client"

export default function Breadcrumbs({ params }: any) {
    console.log(params)
    const {page, url} = params;
    const tabs = url.split("/").slice(1);
    return (
        <div className="page-header">
            <h4 className="page-title">{page}</h4>
            <ul className="breadcrumbs">
                <li className="nav-home">
                    <a href="/"><i className="icon-home"></i></a>
                </li>
                <li className="separator">
                    <i className="icon-arrow-right"></i>
                </li>
                <li className="nav-item">
                    <a href="#">Pages</a>
                </li>
                <li className="separator">
                    <i className="icon-arrow-right"></i>
                </li>
                <li className="nav-item">
                    <a href="#">Starter Page</a>
                </li>
            </ul>
        </div>
    )
}