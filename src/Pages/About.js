import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import OwlCarousel from 'react-owl-carousel';


const emsOptions = {

    margin: 24,
    loop: false,
    dots: false,
    nav: true,
    navText: ["<img className='svg-img' src='../assets/img/icons/prev.svg'>","<img className='svg-img' src='../assets/img/icons/next.svg'>"],
    smartSpeed: 1000,
    autoplay: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 1,
        },
        768: {
            items: 2,
        },
        992: {
            items: 3,
        },
        1200: {
            items: 3,
        },
        1367: {
            items: 4,
        }
    }
}



function About() {
  return (
    <>
        <Header/>

        <div className="ir-ab-pg-head ir-main-pg-head">
            <div className="ir-pg-head-bg"></div>
            <div className="ir-pg-head">
                <h2 className="pg-title">About Us</h2>
            </div>
        </div>

        <section className="ir-about sec-p-tb">
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 col-md-12">
                      <div className="about-detail">
                          <div className="sec-title">
                              <h2>About The National Registry</h2>
                          </div>
                          <p>The National Registry, established in 1970 as a non-profit organization, is the Nation’s Emergency Medical Services Certification organization. The mission of the National Registry of Emergency Medical Technicians has always been centered on protecting the public and advancing the EMS profession.</p>
                          <p>It has been nearly five decades since President Lyndon Johnson's Committee on Highway Traffic Safety recommended the creation of a national certification agency to establish uniform standards for training and examination of personnel active in the delivery of emergency ambulance service. The result of this recommendation was the creation of the National Registry in 1970. Prior to that time, a national certification standard for emergency medical care did not exist.</p>
                          <p>It has been nearly five decades since President Lyndon Johnson's Committee on Highway Traffic Safety recommended the creation of a national certification agency to </p>
                          <a className="btn-4" href="#">Learn More</a>
                      </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                      <div className="about-img">
                          <div className="img-1">
                              <img src="assets/img/about/1.png" className=" " alt="about"/>
                          </div>
                          <div className="img-2">
                              <img src="assets/img/about/2.png" className=" " alt="about"/>
                          </div>
                          <div className="img-3">
                              <img src="assets/img/about/3.png" className=" " alt="about"/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section className="ir-mission sec-p-tb">
          <div className="about-bg"></div>
          <div className="about-shape"></div>
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                      <div className="mission-img">
                          <img src="assets/img/about/5.png" alt="about"/>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="mission-detail">
                          <div className="sec-title">
                              <h2>Our Mission</h2>
                          </div>
                          <p>The National Registry’s mission is to provide a valid, uniform process to assess the knowledge and skills required for competent practice by EMS professionals throughout their careers, and to maintain a registry of certification status</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>


      <section className="ir-directors sec-p-tb">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="directors-detail">
                        <div className="sec-title">
                            <h2>Board Of Directors</h2>
                        </div>
                        <p>The National Registry is governed by a Board of Directors comprised of some of the most prominent figures from all segments of the EMS community and the general public. Our board members are committed to public protection and quality patient care.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="directors-img">
                        <img src="assets/img/about/4.png" alt="about"/>
                    </div>
                </div>
            </div>
        </div>
      </section>


      <section className="ir-certification sec-p-tb">
            <div className="shape"></div>
            <div className="container">
                <div className="sec-title">
                    <h2>National  EMS Certification</h2>
                </div>

                <OwlCarousel className="ir-certi-slider owl-carousel" {...emsOptions}>
                    <div className="ir-certi-card card-1">
                        <div className="inner-card">
                            <img src="assets/img/certification/1.png" alt="certification"/>
                            <h3>EMR</h3>
                            <div className="certi-links">
                                <a href="#">Certification <i className="fa-solid fa-angles-right"></i></a>
                                <a className="re-certi" href="#">Recertification <i className="fa-solid fa-angles-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="ir-certi-card card-2">
                        <div className="inner-card">
                            <img src="assets/img/certification/2.png" alt="certification"/>
                            <h3>EMT</h3>
                            <div className="certi-links">
                                <a href="#">Certification <i className="fa-solid fa-angles-right"></i></a>
                                <a className="re-certi" href="#">Recertification <i className="fa-solid fa-angles-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="ir-certi-card card-3">
                        <div className="inner-card">
                            <img src="assets/img/certification/3.png" alt="certification"/>
                            <h3>AEMT</h3>
                            <div className="certi-links">
                                <a href="#">Certification <i className="fa-solid fa-angles-right"></i></a>
                                <a className="re-certi" href="#">Recertification <i className="fa-solid fa-angles-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="ir-certi-card card-4">
                        <div className="inner-card">
                            <img src="assets/img/certification/4.png" alt="certification"/>
                            <h3>PARAMEDIC</h3>
                            <div className="certi-links">
                                <a href="#">Certification <i className="fa-solid fa-angles-right"></i></a>
                                <a className="re-certi" href="#">Recertification <i className="fa-solid fa-angles-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="ir-certi-card card-1">
                        <div className="inner-card">
                            <img src="assets/img/certification/1.png" alt="certification"/>
                            <h3>EMR</h3>
                            <div className="certi-links">
                                <a href="#">Certification <i className="fa-solid fa-angles-right"></i></a>
                                <a className="re-certi" href="#">Recertification <i className="fa-solid fa-angles-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="ir-certi-card card-2">
                        <div className="inner-card">
                            <img src="assets/img/certification/2.png" alt="certification"/>
                            <h3>EMT</h3>
                            <div className="certi-links">
                                <a href="#">Certification <i className="fa-solid fa-angles-right"></i></a>
                                <a className="re-certi" href="#">Recertification <i className="fa-solid fa-angles-right"></i></a>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
                
            </div>
        </section>

        <Footer/>
    </>
  )
}

export default About