import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import OwlCarousel from 'react-owl-carousel';


const blogSliderOptions = {
    margin: 24,
    loop: true,
    dots: false,
    nav: false,
    // navText: ["<img className='svg-img' src='assets/img/icons/prev.svg'>","<img className='svg-img' src='assets/img/icons/next.svg'>"],
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
            items: 3,
        }
    }
};

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

const heroBannerOptions = {

    margin: 0,
    loop: true,
    dots: true,
    nav: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    mouseDrag: false,
    touchDrag: false,
    smartSpeed: 1000,
    autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 1,
        },
        768: {
            items: 1,
        },
        992: {
            items: 1,
        },
        1200: {
            items: 1,
        },
        1367: {
            items: 1,
        }
    }

}


function HomePage() {

    useEffect( () => {
        Aos.init({
            //duration: 1100,
            easing: 'ease-in-out-back',
            disable: 'tablet, mobile',
        });
    });

  return (
    <>
        {/* <div id="ir-overlay"><span className="loader_img"></span></div> */}
      
        <Header/>

        <div className="ir-hero">
            <div className="ir-main-slider">
            <OwlCarousel className="ir-owl owl-carousel" {...heroBannerOptions}>
                <div className="ir-slide-content slide slide-1">
                    <div className="ir-overlay"></div>
                    <div className="container">
                        <div className="ir-slide-detail">
                            <h1 className="ir-slide-title animated bounce">Renew Your</h1>
                            <h2 className="ir-slide-stitle">National EMS Certification</h2>
                            <p>Your National EMS Certification is too valuable to let expire.</p>
                            <a href="#" className="btn-3">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="ir-slide-content slide slide-2">
                    <div className="ir-overlay"></div>
                    <div className="container">
                        <div className="ir-slide-detail">
                            <h1 className="ir-slide-title">Renew Your</h1>
                            <h2 className="ir-slide-stitle">National EMS</h2>
                            <p>Your National EMS Certification.</p>
                            <a href="#" className="btn-3">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="ir-slide-content slide slide-3">
                    <div className="ir-overlay"></div>
                    <div className="container">
                        <div className="ir-slide-detail">
                            <h1 className="ir-slide-title">Renew Your</h1>
                            <h2 className="ir-slide-stitle">EMS Certification</h2>
                            <p>Certification is too valuable to let expire.</p>
                            <a href="#" className="btn-3">Learn More</a>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
                
            </div>
            <div className="hero-shape"></div>
        </div>

        <section className="ir-about sec-p-tb">
            <div className="shape"></div>
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

        <section className="ir-partner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-12 m-b-991">
                        <div className="sec-title">
                            <h2>Partners</h2>
                        </div>
                        <div className="row m-minus-tb-12">
                            <div className="col-md-4 card-height">
                                <div className="partner-card">
                                    <h4>Training Officers</h4>
                                    <p>Validate the continued competency of Nationally Registered EMS personnel by approving continuing education records entered by agency affiliates.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 card-height">
                                <div className="partner-card">
                                    <h4>Volunteers</h4>
                                    <p>The National Registry of EMT's relies heavily on input from volunteers in the EMS community to improve our products and services.</p>
                                </div>
                            </div>
                            <div className="col-md-4 card-height">
                                <div className="partner-card">
                                    <h4>Medical Directors</h4>
                                    <p>Medical Directors ensure the continued competency of Nationally Registered EMS personnel by validating level specific skills.</p>
                                </div>
                            </div>
                            <div className="col-md-4 card-height">
                                <div className="partner-card">
                                    <h4>Program Directors</h4>
                                    <p>Program Directors are responsible for validating the competency of candidates seeking National EMS Certification</p>
                                </div>
                            </div>
                            <div className="col-md-4 card-height">
                                <div className="partner-card">
                                    <h4>State Officials</h4>
                                    <p>A vital part of the National Registry</p>
                                </div>
                            </div>
                            <div className="col-md-4 card-height">
                                <div className="partner-card">
                                    <h4>Examination Coordinators</h4>
                                    <p>Exam Coordinators are the central role in identifying personnel, equipment, and hosting advanced level psychomotor examinations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12">
                        <div className="sec-title">
                            <h2>Exam Info</h2>
                        </div>
                        <div className="exam-card">
                            <div className="card-inner">
                                <a href="#"><img src="assets/img/icons/hand.svg" alt="link"/>Als Psychomotor Exam</a>
                                <a href="#"><img src="assets/img/icons/hand.svg" alt="link"/>Als Psychomotor Exam</a>
                                <a href="#"><img src="assets/img/icons/hand.svg" alt="link"/>Als Psychomotor Exam</a>
                                <a href="#"><img src="assets/img/icons/hand.svg" alt="link"/>Als Psychomotor Exam</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="ir-blog sec-p-tb">
            <div className="container">
                <div className="row">
                    <div className="sec-title">
                        <h2>Latest Post</h2>
                    </div>

                    <OwlCarousel className="owl-carousel owl-theme ir-blog-slider" {...blogSliderOptions}>
                        <div className="ir-blog-card">
                            <div className="ir-blog-img">
                                <img src="assets/img/blog/1.png" alt="blog"/>
                                <a className="btn-5" href="#">From the media</a>
                            </div>
                            <div className="ir-blog-detail">
                                <h5>Employee-employer relationship: The claim of radio broadcasters Slutsky and Dominguez</h5>
                                <p>Published on the Walla website</p>
                                <a href=""><img className="svg-img" src="../assets/img/icons/blog-arrow.svg" alt="blog-arrow"/>To the full article</a>
                            </div>
                        </div>
                    </OwlCarousel>
                    
                </div>
            </div>
        </section>


        <Footer/>

    </>
  )
}

export default HomePage