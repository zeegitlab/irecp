import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Menu from './component/Menu'

function Certificate() {
  return (
    <>
        <Header/>

        <div className="site-container main">

            <Menu/>

            <div className="page-content">

                <h2 className="page-title">Certification</h2>

               
                <div className="card px-0 pt-4 pb-0 mt-3 mb-3">                
                    <form id="msform">                        
                       
                        <ul id="progressbar">
                            <li className="active" id="account"><strong>Verify Information</strong></li>
                            <li id="personal"><strong>CPR Expiration</strong></li>
                            <li id="payment"><strong>Program Information</strong></li>
                            <li id="delivery"><strong>Delivery Method</strong></li>
                            <li id="confirm"><strong>Review</strong></li>
                        </ul>
                        <fieldset>
                            
                            <div className="info-sec">
                                <h3>Which level of certification are you choosing?</h3>
                                <p>None - I was instructed to take an assessment Exam</p>
                            </div>

                            <div className="radio">
                                <label><input type="radio" name="optradio"/><span>Emergency Medical Responder (EMR)</span></label>
                            </div>
                            <div className="radio">
                                <label><input type="radio" name="optradio"/><span>Emergency Medical Technician (EMT)</span></label>
                            </div>
                            <div className="radio">
                                <label><input type="radio" name="optradio"/><span>Advanced Medical Technician (EMT) </span></label>
                            </div>
                            <div className="radio">
                                <label><input type="radio" name="optradio"/><span>Paramedic </span></label>
                            </div>
                            <div className="radio">
                                <label><input type="radio" name="optradio"/><span>None - I was instructed to take an assessment Exam </span></label>
                            </div>

                            <a type="button" name="next" className="next action-button" >Next <i className="next-icon fa fa-angle-right" aria-hidden="true"></i></a>
                        </fieldset>

                        <fieldset>

                            <div className="info-sec">
                                <h3>You are in a step 2</h3>
                                <p>None - I was instructed to take an assessment Exam</p>
                            </div>
                            
                            <div className="radio">
                                <label><input type="radio" name="optradio"/><span>Paramedic </span></label>
                            </div>
                            <div className="radio">
                                <label><input type="radio" name="optradio"/><span>None - I was instructed to take an assessment Exam </span></label>
                            </div>
                            <div className="radio">
                                <label><input type="radio" name="optradio"/><span>Emergency Medical Responder (EMR)</span></label>
                            </div>
                            <div className="radio">
                                <label><input type="radio" name="optradio"/><span>Emergency Medical Technician (EMT)</span></label>
                            </div>

                            <a type="button" name="next" className="next action-button" >Next <i className="next-icon fa fa-angle-right" aria-hidden="true"></i></a>
                            <a type="button" name="next" className="previous action-button" ><i className="previous-icon fa fa-angle-left" aria-hidden="true"></i> Previous</a>
                        </fieldset>

                        <fieldset>
                            
                            <div className="info-sec">
                                <h3>You are in a step 3</h3>
                                <p>None - I was instructed to take an assessment Exam</p>
                            </div>

                            <div className="radio">
                                <label><input type="radio" name="optradio"/><span>Emergency Medical Responder (EMR)</span></label>
                            </div>
                            <div className="radio">
                                <label><input type="radio" name="optradio"/><span>Paramedic </span></label>
                            </div>
                            <div className="radio">
                                <label><input type="radio" name="optradio"/><span>None - I was instructed to take an assessment Exam </span></label>
                            </div>

                            <a type="button" name="next" className="next action-button" >Next <i className="next-icon fa fa-angle-right" aria-hidden="true"></i></a>
                            <a type="button" name="next" className="previous action-button" ><i className="previous-icon fa fa-angle-left" aria-hidden="true"></i> Previous</a>
                        </fieldset>

                        <fieldset>
                            
                            <div className="info-sec">
                                <h3>You are in a step 4</h3>
                                <p>None - I was instructed to take an assessment Exam</p>
                            </div>

                            <div className="radio">
                                <label><input type="radio" name="optradio"/><span>Emergency Medical Responder (EMR)</span></label>
                            </div>
                            <div className="radio">
                                <label><input type="radio" name="optradio"/><span>Emergency Medical Technician (EMT)</span></label>
                            </div>
                            <div className="radio">
                                <label><input type="radio" name="optradio"/><span>Paramedic </span></label>
                            </div>
                            <div className="radio">
                                <label><input type="radio" name="optradio"/><span>None - I was instructed to take an assessment Exam </span></label>
                            </div>

                            <a type="button" name="next" className="next action-button" >Next <i className="next-icon fa fa-angle-right" aria-hidden="true"></i></a>
                            <a type="button" name="next" className="previous action-button" ><i className="previous-icon fa fa-angle-left" aria-hidden="true"></i> Previous</a>
                        </fieldset>

                        <fieldset>
                            
                            <div className="info-sec">
                                <h3>You are in a step 5</h3>
                                <p>None - I was instructed to take an assessment Exam</p>
                            </div>

                            <div className="radio">
                                <label><input type="radio" name="optradio"/><span>Emergency Medical Technician (EMT)</span></label>
                            </div>
                            <div className="radio">
                                <label><input type="radio" name="optradio"/><span>Advanced Medical Technician (EMT) </span></label>
                            </div>

                            <input type="button" name="next" className="next action-button" value="Submit" />
                            <a type="button" name="next" className="previous action-button" ><i className="previous-icon fa fa-angle-left" aria-hidden="true"></i> Previous</a>
                        </fieldset>
                    </form>
                </div>


            </div>

            <Footer/>

        </div>
    </>
  )
}

export default Certificate