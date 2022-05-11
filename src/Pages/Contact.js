import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Contact() {
  return (
    <>
        <Header/>

        <div className="ir-contact-us-pg-head ir-main-pg-head">
            <div className="ir-pg-head-bg"></div>
            <div className="ir-pg-head">
                <h2 className="pg-title">Contact Us</h2>
            </div>
        </div>


        <section className="ir-contact-us-sec sec-p-tb">
            <div className="container ir-contact-us-content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sec-title">
                            <h2>Contact us for an introductory call, free of charge</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="m-r-50">
                            <div className="sec-map-info">
                                <iframe src="//maps.google.com/maps?q=31.771959,35.217018&z=15&output=embed" allowFullScreen=""></iframe>
                            </div>
                            <div className="sec-basic-info">
                                <div className="basic-info">
                                    <p><span>office@support.com</span><i className="fa fa-envelope"></i></p>
                                    <p><span>Phone +91 987 654 3210</span><i className="fa fa-phone"></i></p>
                                </div>
                                <div className="basic-info">
                                    <p className="add"><span>39 Jerusalem Street, K. Ono, Tower A, 6th floor</span><i className="fa fa-map-marker"></i></p>
                                    <p><span>Fax 03-6495576</span><i className="fa fa-fax"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="m-l-50">
                            <div className="sec-form-info">
                                <form action=""  dir="rtl">
                                    <div className="form-group">
                                        <label htmlFor="pwd">Full name<span>*</span></label>
                                        <input type="text" className="form-control" id="f_name" name="f_name" placeholder="Enter full name"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pwd">Phone<span>*</span></label>
                                        <input type="phone" className="form-control" id="phone" name="phone" placeholder="Enter phone number"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="comment">Messgae</label>
                                        <textarea className="form-control" rows="5" id="message" name="message" placeholder="Type here...."></textarea>
                                    </div> 
                                    <button type="submit" className="btn btn-default">Send</button>
                                </form>
                            </div>
                            <div className="sec-social-info">
                                <a href=""><i className="fa fa-envelope"></i></a>
                                <a href=""><i className="fa fa-linkedin"></i></a>
                                <a href=""><i className="fa fa-facebook"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
    </>
  )
}

export default Contact