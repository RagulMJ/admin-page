import React from 'react'
import { Formik } from 'formik'; 

function CreateUserform() {


  return (
    <div className="container">
      <h1 className="text-center">Create User Details</h1>
      <form className="row g-3">
        <div className="col-md-6 mb-2">
        <label htmlFor="fname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            id="fname"
            className="form-control"
            aria-label="First name"
          />
        </div>
        <div className="col-md-6 mb-2">
        <label htmlFor="lname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            id="lname"
            className="form-control"
            aria-label="Last name"
          />
        </div>

        <div className="col-md-12">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input type="text" className="form-control" id="inputAddress" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            Address 2
          </label>
          <input type="text" className="form-control" id="inputAddress2" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <select id="inputState" className="form-select">
              <option value="">Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputZip" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateUserform