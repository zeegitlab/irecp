import React from 'react'

function Header() {
  return (
    <>
        <div className="header">
            <div className="header-logo">
                <a className="button-menu">
                    <img className="svg-img logo-img" src="assets/img/icon/sidebar-menu.svg" alt="site-logo" />
                </a>
                <img className="svg-img logo-img" src="assets/img/icon/site-logo.svg" alt="site-logo" />
            </div>
            <div id="dd" className="wrapper-dropdown" tabIndex="1">
                <div id="image" className="user-info">
                    <img className="profile-pic" src="assets/img/profile/profile-1.png" alt="profile pic icon" />
                    <span className="user-name">User Name</span>
                    <img className="drop-down-icon svg-img" src="assets/img/icon/drop-down.svg" alt="drop down icon" />
                </div>
                <ul className="user-drop-down">
                    <li><a href="#"><i className="icon-user"></i>Profile</a></li>
                    <li><a href="#"><i className="iconcog"></i>Settings</a></li>
                    <li><a href="#"><i className="icon-remove"></i>Logout</a></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Header