import Breadcrumbs from '@/app/(ui)/components/breadcrumbs';

export default async function Page({ params }: any) {
    const { id } = await params;

    return (
        <>
            <Breadcrumbs title={"Profile Page"} paths={"/workspace/profile"} capitalize />
            <div className="page-category">
                <section className="section">
                    <div className="container-fluid">
                        <p>{id}</p>
                    </div>
                </section>
            </div>
        </>
    )
}