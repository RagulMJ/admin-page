import React from 'react'

function Productform() {
    return (
        <form>
            <h1 className="text-center">Create Product Details</h1>
            <div className="row mb-3">
                <label htmlFor="P-Name" className="col-sm-2 col-form-label">
                    Name :
                </label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="P-Name" />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="P-Price" className="col-sm-2 col-form-label">
                    Price :
                </label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="P-Price" />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="P-Category" className="col-sm-2 col-form-label">
                    Catogory :
                </label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="P-Category" />
                </div>
                <div className="d-grid gap-2 col-2 mx-auto">
                    <button type="submit" className="  btn btn-primary mt-4 ">
                        Submit
                    </button>
                </div>
            </div>
        </form>
        
    )
}

export default Productform