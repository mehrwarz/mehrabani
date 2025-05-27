export default function HomePage() {
	

	return (
		<div className="form-elements-wrapper">
			<div className="row">
				<div className="col-lg-6">
					<div className="card-style mb-30">
						<h6 className="mb-25">Input Fields</h6>
						<div className="input-style-1">
							<label>Full Name</label>
							<input type="text" placeholder="Full Name" />
						</div>
						<div className="input-style-2">
							<input type="text" placeholder="Full Name" />
							<span className="icon"> <i className="lni lni-user"></i> </span>
						</div>
						<div className="input-style-3">
							<input type="text" placeholder="Full Name" />
							<span className="icon"><i className="lni lni-user"></i></span>
						</div>
					</div>
				</div>

				<div className="col-lg-6">
					<div className="card-style mb-30">
						<h6 className="mb-25">Selects</h6>
						<div className="select-style-1">
							<label>Category</label>
							<div className="select-position">
								<select>
									<option value="">Select category</option>
									<option value="">Category one</option>
									<option value="">Category two</option>
									<option value="">Category three</option>
								</select>
							</div>
						</div>
						<div className="select-style-2">
							<div className="select-position">
								<select>
									<option value="">Select category</option>
									<option value="">Category one</option>
									<option value="">Category two</option>
									<option value="">Category three</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}