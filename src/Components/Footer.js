import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <footer>
            <div className="container">
                <div className="subscribe">
                    <div className="shape-1"></div>
                    <div className="shape-2"></div>
                    <div className="shape-3"></div>
                    <div className="detail">
                        <h2>Subscribe to our mailing list</h2>
                        <form>
                            <div className="pseudo-subscribe">
                                <input type="text" placeholder="Email" autoFocus required/>
                                <button className="btn-6" type="submit">Attach me</button>
                            </div>
                        </form>
                    </div>
                    <div className="shape-4"></div>
                </div>
                <div className="footer-nav">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="nav-list">
                                <h6 className="f-nav-title">The Registry</h6>
                                <ul className="nav-link-list">
                                    <li><Link to='/about'>About Us</Link></li>
                                    <li><Link to='/contact'>Contact</Link></li>
                                    <li><Link to='/'>Board of Directors</Link></li>
                                    <li><Link to='/'>Team</Link></li>
                                    <li><Link to='/'>Careers</Link></li>
                                    <li><Link to='/'>History</Link></li>
                                    <li><Link to='/'>Store</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="nav-list">
                                <h6 className="f-nav-title">Topics</h6>
                                <ul className="nav-link-list">
                                    <li><Link to='/'>Recertification</Link></li>
                                    <li><Link to='/'>EMS Compact</Link></li>
                                    <li><Link to='/'>Maps, Stats & Data</Link></li>
                                    <li><Link to='/'>NCCP Recertification</Link></li>
                                    <li><Link to='/'>Paramedic Portfolio</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="nav-list">
                                <h6 className="f-nav-title">Information For</h6>
                                <ul className="nav-link-list">
                                    <li><Link to='/'>Candidates</Link></li>
                                    <li><Link to='/'>Program Directors</Link></li>
                                    <li><Link to='/'>Training Officers</Link></li>
                                    <li><Link to='/'>Medical Directors</Link></li>
                                    <li><Link to='/'>State Officials</Link></li>
                                    <li><Link to='/'>Educators</Link></li>
                                    <li><Link to='/'>The Public</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="nav-list">
                                <h6 className="f-nav-title">Quick Links</h6>
                                <ul className="nav-link-list">
                                    <li><Link to='/'>Annual Reports</Link></li>
                                    <li><Link to='/'>EMS Job Board</Link></li>
                                    <li><Link to='/'>How Do I...?</Link></li>
                                    <li><Link to='/'>Policies</Link></li>
                                    <li><Link to='/'>Resources</Link></li>
                                    <li><Link to='/'>State EMS Agencies</Link></li>
                                    <li><Link to='/'>COVID-19 Updates</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-social">
                    <a href="" target='_blank'><i className="fa fa-facebook"></i>Facebook</a>
                    <a href="" target='_blank'><i className="fa fa-twitter"></i>Twitter</a>
                    <a href="" target='_blank'><i className="fa fa-instagram"></i>Instagram</a>
                    <a href="" target='_blank'><i className="fa fa-linkedin"></i>Linkedin</a>
                </div>
            </div>
            <div className="footer-copy">
                <div className="container">
                    <div className="detail">
                        <p>© Copyright 2001-2022, Version 2022.1, National Registry of Emergency Medical Technicians</p>
                        <Link to='/'>Privacy Statement</Link>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer