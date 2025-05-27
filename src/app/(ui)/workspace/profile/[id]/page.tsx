
export default async function Page({ params }: any) {
    const { id } = await params;


    return (
            < section className = "section" >
                <div className="container-fluid">
                    <p>{id}</p>
                </div>
			</section>
	)
}