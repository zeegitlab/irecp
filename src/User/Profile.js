import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Menu from './component/Menu'


function Profile() {
    return (
        <>

            <Header />

            <div className="site-container main">

                <Menu />

                <div className="page-content">

                    <h2 className="page-title">Create Profile</h2>

                    <form action="/action_page.php">

                        
                        <div className="card profile-card px-0 pt-4 pb-0 mt-3 mb-3">
                            <h4 className="card-sec-title">Personal Information</h4>
                            <hr />
                            <div className="row card-form-sec">
                                <div className="col-lg-2 col-md-3 col-sm-12">
                                    <div className="profile-div">
                                        <img className="svg-img profile-pic" src="assets/img/default/profile.svg" alt="logo icon" />
                                    </div>
                                    <div className="form-group">
                                        <label className="file-upload btn-color">
                                            <input type="file" id="image_file" name="image_file" accept="image/png, image/jpeg, image/jpg"/>Upload
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-10 col-md-9 col-sm-12">
                                    <div className="d-flex">
                                        <div className="form-group m-right">
                                            <label htmlFor="First Name">First Name</label>
                                            <input type="text" className="form-control" id="first_name" name="first_name" placeholder="Enter first name"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="Last Name">Last Name</label>
                                            <input type="text" className="form-control" id="last_name" name="last_name" placeholder="Enter last name"/>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="form-group m-right">
                                            <label htmlFor="First Name">Gender</label>
                                            <select className="form-control" id="gender" name="gender" placeholder="select">
                                                <option value="M">MALE</option>
                                                <option value="F">FEMALE</option>
                                                <option value="O">OTHER</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="Last Name">D.O.B</label>
                                            <div className="date-picker-div form-control">
                                                <span>Select</span>
                                                <img className="svg-img" src="assets/img/icon/date-picker.svg" alt="Date icon" />

                                                <input type="text" className="form-control datepicker" data-date-format="mm/dd/yyyy" id="last_name" name="last_name" placeholder="Select"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Last Name">Adhar Card Number</label>
                                        <input type="text" className="form-control" id="adharcard_nub" name="adharcard_nub" placeholder="Enter adhar card number"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="file-upload btn-color">
                                            <input type="file" id="image_file" name="image_file" accept="image/png, image/jpeg, image/jpg"/>Upload
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div className="card profile-card px-0 pt-4 pb-0 mt-3 mb-3">
                            <h4 className="card-sec-title">Address</h4>
                            <hr />
                            <div className="row card-form-sec">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="d-flex">
                                        <div className="form-group m-right">
                                            <label htmlFor="Address 1">Address 1</label>
                                            <input type="text" className="form-control" id="address_1" name="address_1" placeholder="Enter address"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="Address 2">Address 2</label>
                                            <input type="text" className="form-control" id="address_2" name="address_2" placeholder="Enter address"/>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="form-group m-right">
                                            <label htmlFor="City">City</label>
                                            <input type="text" className="form-control" id="city" name="city" placeholder="Enter city"/>
                                        </div>
                                        <div className="form-group m-right">
                                            <label htmlFor="State">State</label>
                                            <select className="form-control" id="state" name="state" placeholder="select">
                                                <option>select</option>
                                                <option value="GUJ">GUJARAT</option>
                                                <option value="MH">MAHARASTRA</option>
                                                <option value="RJ">RAJSTAN</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="Pincode">Pincode</label>
                                            <input type="text" className="form-control" id="pincode" name="pincode" placeholder="Enter pin code"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="card profile-card px-0 pt-4 pb-0 mt-3 mb-3">
                            <div className="row card-form-sec">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <h4 className="card-sec-title">Contact Information</h4>
                                    <hr />
                                    <div className="form-group">
                                        <label htmlFor="Mobile Number">Mobile Number</label>
                                        <input type="text" className="form-control" id="mobile_number" name="mobile_number" placeholder="Enter mobile number"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Primary Email ID ">Primary Email ID </label>
                                        <input type="email" className="form-control" id="primary_email" name="primary_email" placeholder="Enter primary email"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Secondary Email ID ">Secondary Email ID </label>
                                        <input type="email" className="form-control" id="secondary_email" name="secondary_email" placeholder="Enter secondary email"/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <h4 className="card-sec-title second-title">Professional Information</h4>
                                    <hr />
                                    <div className="form-group">
                                        <label htmlFor="High School / 12th / +2">High School / 12th / +2</label>
                                        <div className="upload-file-div form-control">
                                            <span>Upload PDF</span>
                                            <img className="svg-img" src="assets/img/icon/upload-file.svg" alt="Upload icon" />

                                            <input type="file" className="form-control" id="upload_pdf" name="upload_pdf" placeholder="Upload PDF"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="EMS Education">EMS Education</label>
                                        <select className="form-control" id="ems_education" name="ems_education" placeholder="select">
                                            <option>select</option>
                                            <option value="EMS1">EMS 1</option>
                                            <option value="EMS2">EMS 2</option>
                                            <option value="EMS3">EMS 3</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Highest Level of Education">Highest Level of Education</label>
                                        <select className="form-control" id="hl_education" name="hl_education" placeholder="select">
                                            <option>select</option>
                                            <option value="HL1">Highest Level 1</option>
                                            <option value="HL2">Highest Level 2</option>
                                            <option value="HL3">Highest Level 3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="card profile-card px-0 pt-4 pb-0 mt-3 mb-3 last-card">
                            <h4 className="card-sec-title">Address</h4>
                            <hr />
                            <div className="row card-form-sec card-form-top">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="Name of Institution">Name of Institution</label>
                                        <input type="text" className="form-control" id="name_of_institution" name="name_of_institution" placeholder="SRSK Institute"/>
                                    </div>
                                    <div className="d-flex">
                                        <div className="form-group m-right">
                                            <label htmlFor="Address 1">Address 1</label>
                                            <input type="text" className="form-control" id="address_1" name="address_1" placeholder="Enter address"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="Address 2">Address 2</label>
                                            <input type="text" className="form-control" id="address_2" name="address_2" placeholder="Enter address"/>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="form-group m-right">
                                            <label htmlFor="City">City</label>
                                            <input type="text" className="form-control" id="city" name="city" placeholder="Enter city"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="State">State</label>
                                            <select className="form-control" id="state" name="state" placeholder="select">
                                                <option>select</option>
                                                <option value="GUJ">GUJARAT</option>
                                                <option value="MH">MAHARASTRA</option>
                                                <option value="RJ">RAJSTAN</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="form-group m-right">
                                            <label htmlFor="Website">Website</label>
                                            <input type="text" className="form-control" id="website" name="website" placeholder="Enter Website"/>
                                        </div>
                                        <div className="form-group m-right">
                                            <label htmlFor="Email">Email</label>
                                            <input type="text" className="form-control" id="email" name="email" placeholder="Enter Email"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="Phone Number">Phone Number</label>
                                            <input type="text" className="form-control" id="phone_number" name="phone_number" placeholder="Enter Phone Number"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row card-form-sec">
                                <div className="col-lg-8 col-md-8 col-sm-12">
                                    <div className="d-flex radio-sec">
                                        <label htmlFor="Address 1">Do you have educational transcript / mark list</label>
                                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                                            <div className="upload-file-div form-control">
                                                <span>Upload PDF</span>
                                                <img className="svg-img" src="assets/img/icon/upload-file.svg" alt="Upload icon" />

                                                <input type="file" className="form-control opacity-0" id="upload_pdf" name="upload_pdf" placeholder="Upload PDF"/>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row card-form-sec">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="d-flex radio-sec">
                                        <label htmlFor="Address 1">Do you have educational transcript / mark list</label>
                                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row card-form-sec">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="d-flex radio-sec">
                                        <label htmlFor="Address 1">Do you have any certificate of registeration</label>
                                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row card-form-sec">
                                <div className="col-lg-8 col-md-8 col-sm-12">
                                    <div className="d-flex radio-sec">
                                        <label htmlFor="Address 1">With any councel or body</label>
                                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                                            <div className="upload-file-div form-control">
                                                <span>Upload PDF</span>
                                                <img className="svg-img" src="assets/img/icon/upload-file.svg" alt="Upload icon" />

                                                <input type="file" className="form-control opacity-0" id="upload_pdf" name="upload_pdf" placeholder="Upload PDF" />
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row card-form-sec">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="d-flex radio-sec">
                                        <label htmlFor="Address 1">Do you have any proof of employment</label>
                                        <input type="radio" id="html" name="fav_language" value="HTML" />
                                    </div>
                                </div>
                            </div>
                            <div className="row card-form-sec">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="d-flex radio-sec">
                                        <label htmlFor="Address 1">Do you have valid basic life support certificate</label>
                                        <input type="radio" id="html" name="fav_language" value="HTML" />
                                    </div>
                                </div>
                            </div>
                            <div className="row card-form-sec">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="d-flex checkbox-sec">
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                        <label htmlFor="vehicle1"> I here by</label><br/>
                                    </div>
                                </div>
                            </div>
                            <div className="row card-form-sec">
                                <div className="form-group form-submit-btn">
                                    <button className="btn review-btn">Review Profile</button>
                                    <button className="btn submit-btn">Submit for Credential</button>
                                </div>
                            </div>
                        </div>


                    </form>

                    <Footer />

                </div>

            </div>

        </>
    )
}

export default Profile