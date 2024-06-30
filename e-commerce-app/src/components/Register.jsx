
export default function Register() {


    return (

        <div className="container">
            <main>
                <div className="py-5 text-center">
                    <h2>Create an Account</h2>
                </div>

                <div className="row g-5">

                    <div className="col-md-7 col-lg-12">
                        <form className="needs-validation" novalidate>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label for="firstName" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label for="lastName" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder=""required />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label for="email" className="form-label">Email </label>
                                    <input type="email" className="form-control" id="email" placeholder="abc@example.com" />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label for="pwd" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="email" />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label for="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>



                                <div className="col-md-5">
                                    <label for="country" className="form-label">Country</label>
                                    <select className="form-select" id="country" required>
                                        <option value="">Choose...</option>
                                        <option>United States</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label for="state" className="form-label">State</label>
                                    <select className="form-select" id="state" required>
                                        <option value="">Choose...</option>
                                        <option>California</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label for="zip" className="form-label">Zip</label>
                                    <input type="text" className="form-control" id="zip" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Zip code required.
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 mb-5">
                            <button className="w-100 btn btn-primary btn-md" type="submit">Create Account</button>

                            </div>
                            
                        </form>
                    </div>
                </div>
            </main>
        </div>

    )
}
