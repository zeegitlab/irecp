import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

function Login() {

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


    <section className="ir-login-sec" id="ir-login">
        <div className="ir-row">
            <div className="ir-order-1 ir-col" data-aos="fade-right" data-aos-duration="2000">
                <div className="login-content login-content-space">

                    <div className="ir-form-title">
                        <h4>Sign In</h4>
                    </div>
                    <div className="ir-login-body">
                        
                        <form className="ir-login-form">
                            <div className="form-group">
                                <img className="svg-img" src="assets/img/icons/email.svg" alt="mail"/>
                                <label htmlFor="">Email Address</label>
                                <input type="text" className="form-control" id="username" name="username" placeholder="yourgmail123@gmail.com"/>
                            </div>
                            <div className="form-group">
                                <img className="svg-img" src="assets/img/icons/pwd.svg" alt="pwd"/>
                                <label htmlFor="">Enter password</label>
                                <input type="password" className="form-control" id="password" name="password" placeholder="Enter password"/>
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
                            <p>don't have a account?<a href="/register" className="ir-signup">Sign up</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12 ir-order-2 ir-col-detail" data-aos="fade-left" data-aos-duration="2000">
                <div className="ir-login-info">
                    <img src="assets/img/logo/1.png" alt="logo"/>
                    <h2>Welcome Back</h2>
                    <p>Discover millions of events, get alerts about your favorite artists, teams, plays and more — plus always- secure, effortless ticketing.</p>
                </div>
            </div>
        </div>
    </section>
 
    </>
  )
}

export default Login