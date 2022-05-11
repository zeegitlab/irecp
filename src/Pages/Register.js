import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

function Register() {

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

   
    <section className="ir-login-sec ir-regi-sec" id="ir-login">
        <div className="ir-row">
            <div className="ir-order-1 ir-col" data-aos="fade-right" data-aos-duration="2000">
                <div className="login-content">

                    <div className="ir-form-title">
                        <h4>Create Account</h4>
                    </div>
                    <div className="ir-login-body">
                        
                        <form className="ir-login-form">
                            <div className="form-group">
                                <img className="svg-img" src="assets/img/icons/email.svg" alt="mail"/>
                                <label htmlFor="">Adhar Card</label>
                                <input type="text" className="form-control" id="username" name="username" placeholder="Adharcard number"/>
                            </div>
                            <div className="form-group">
                                <img className="svg-img" src="assets/img/icons/email.svg" alt="mail"/>
                                <label htmlFor="">Confirm Adhar Card</label>
                                <input type="text" className="form-control" id="username" name="username" placeholder="Confirm adhar card number"/>
                            </div>
                            <div className="form-group">
                                <img className="svg-img" src="assets/img/icons/pwd.svg" alt="pwd"/>
                                <label htmlFor="">Password</label>
                                <input type="password" className="form-control" id="password" name="password" placeholder="Enter password"/>
                            </div>
                            <div className="form-group">
                                <img className="svg-img" src="assets/img/icons/pwd.svg" alt="pwd"/>
                                <label htmlFor="">Confirm Password</label>
                                <input type="password" className="form-control" id="password" name="password" placeholder="Enter confirm password"/>
                            </div>   
                            <div className="form-group with-check">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="remember"/>
                                    <label className="form-check-label" htmlFor="remember">Remember Me</label>
                                </div>
                                <a className="forgot ir-forgot" href="/">Forgot Password?</a>
                            </div>      
                            <div className="form-group btn-grp">
                                <button type="submit" className="btn btn-primary ir-btn-submit">Sign in</button>
                            </div>
                        </form>

                    </div>
                    <p className="login-detail">By continuing past this page, you agree to the <a href="terms.html">Terms of Use</a> and understand that information will be used as described in our <a href="privacy.html">Privacy Policy.</a></p>
                    <div className="ir-signup-help form-group">
                        <div className="form-control">
                            <p>You have an account?<a href="login.html" className="ir-signup">Login</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ir-order-2 ir-col-detail" data-aos="fade-left" data-aos-duration="2000">
                <div className="ir-login-info">
                    <div className="ir-info-block">
                        <img src="assets/img/logo/1.png" alt="logo"/>
                        <h2>Register</h2>
                        <p>Discover millions of events, get alerts about your favorite artists, teams, plays and more — plus always- secure, effortless ticketing.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    </>
  )
}

export default Register