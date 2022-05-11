import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Menu() {

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");



  return (
    <>
        <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/user/certificate" className={splitLocation[2] === "certificate" ? "active" : ""}>
                            <img className="svg-img" src="assets/img/icon/user-name.svg" alt="user name" /><span>User
                                Name</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <img className="svg-img" src="assets/img/icon/my-role.svg" alt="currunt role" /><span>My Currunt
                                Role</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/dashboard" className={splitLocation[2] === "dashboard" ? "active" : ""}>
                            <img className="svg-img" src="assets/img/icon/dashboard.svg"
                                alt="dashboard" /><span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/profile" className={splitLocation[2] === "profile" ? "active" : ""}>
                            <img className="svg-img" src="assets/img/icon/profile.svg" alt="profile" /><span>Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <img className="svg-img" src="assets/img/icon/professional-bio.svg"
                                alt="professional-bio" /><span>Professional Bio</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <img className="svg-img" src="assets/img/icon/create-app.svg" alt="create-app" /><span>Create
                                Application</span>
                        </Link>
                    </li>
                </ul>
            </div>
    </>
  )
}

export default Menu