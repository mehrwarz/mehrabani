"use client"
import Breadcrumbs from "@/app/components/breadcrumbs";
import Table from "@/app/components/table";
import { Clients } from "@/data/clients"
import Link from "next/link";



export default function Client() {
    const config = {
        data: Clients,
        columns: [
            {data: 'name'},
            {data: 'position'},
            {data: 'office'},
            {
                data: 'age',
                render: (data: string)=> {
                    return data + " years old"
                }
            },
            {data: 'startDate'},
            {data: 'salary'},
        ]
    }

    return (
        <>
            <Breadcrumbs title="Clients" paths="/workspace/client" capitalize />
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex justify-content-between w-100">
                                <h2>Clients list</h2>
                                <ul className="nav nav-tabs justify-content-end">
                                    <li className="nav-item">
                                        <Link href="/workspace/client/add" className="nav-link">Add New Client</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/workspace/client/add" className="nav-link">Export Excel</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/workspace/client/add" className="nav-link">Add Client</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-body">
                            <Table id="clients" heading={["Name", "Position", "Office", "Age", "Start date", "Salary"]} config={config} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}