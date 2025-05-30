import Breadcrumbs from "@/app/components/breadcrumbs";
import Table from "@/app/components/table";
import { Clients } from "@/data/clients"

export default function Client() {
    return (
        <>
            <Breadcrumbs title="Clients" paths="/workspace/client" capitalize />
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Basic</h4>
                        </div>
                        <div className="card-body">
                            <Table id="clients" heading={["Name","Position","Office","Age","Start date","Salary"]}  data={Clients}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}