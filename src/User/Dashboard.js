import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Menu from './component/Menu'

function Dashboard() {
  return (
    <>
        
        <Header/>

        <div class="site-container main">

            <Menu/>

            <div class="page-content">

                <h2 class="page-title">Dashboard</h2>

                <div class="card dash-card-sec px-0 pt-4 pb-0 mt-3 mb-3">
                    <h4 class="card-sec-title">User Name</h4>
                    <hr />
                    <div class="about-sec">
                        <div class="left-div">
                            <img class="" src="assets/img/icon/site-logo.svg" alt="logo icon" />
                        </div>
                        <div class="right-div">
                            <p><label>EMS ID :</label><span><b> 5204-4835-3132</b></span></p>
                            <p><label>D.O.B. :</label><span><b> 15-07-1992</b></span></p>
                            <p><label>Adhar card Number :</label><span><b> #*********3546</b></span></p>

                            <a class="btn btn-color">Update my profile</a>
                        </div>
                    </div>
                </div>

                <div class="card dash-card-sec px-0 pt-4 pb-0 mt-3 mb-3 last-card">
                    <h4 class="card-sec-title">Recent Cerrtification Applications</h4>
                    <hr />
                    <div class="info-sec">
                        <p><label>Paramedic :</label><span><b> Initial Application</b></span></p>
                        <p><label>Status :</label><span><b> Examination Scored</b></span></p>
                        <p><label>Application Confirmation ID :</label><span><b> 2014569874</b></span></p>
                        <p><label>Application Created :</label><span><b> 31/05/2016   03:10 pm (EST)</b></span></p>
                    </div>
                    <div class="info-btn">
                        <a class="btn btn-color">View All Certification Applications</a>
                        <a class="btn btn-hover">Create Certification Applications</a>
                    </div>
                </div>

                <Footer/>

            </div>
    
        </div>


    </>
  )
}

export default Dashboard