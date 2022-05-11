import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
          <header className="ir-header">
            <div className="header-top">
                <div className="container">
                    <div className="row align-items-center">                        
                        
                        <div className="top-nav">
                            <div className="ir-header-bottons">
                                <Link to='/login' className="btn-1 m-r-10">Login</Link>
                                <Link to='/register' className="btn-2">Create Account</Link>
                            </div>
                            <div className="search-field">
                                <form>
                                    <div className="pseudo-search">
                                        <button className="s-btn" type="submit"><img className="svg-img" src="../assets/img/icons/search.svg" alt="search"/></button>
                                        <input type="text" placeholder="to look for....." autoFocus required/>
                                    </div>
                                </form>
                            </div>
                        </div>                     
                    </div>
                </div>
            </div>
            
            <div id="ir-main-menu-desk" className="sticky-nav ir-main-menu-desk">
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-md-12 align-self-center">
                            <div className="ir-main-menu">
                                <a href="javascript:void(0)" className="d-991 ir-side-toggle"><img className="svg-img nav-toggle" src="../assets/img/icons/menu.svg" alt="menu"/></a>
                                <ul className="d-none-991">
                                    <li className="dropdown"><a href="javascript:void(0)"><img className="svg-img" src="../assets/img/icons/drop.svg" alt="icon"/>Policies</a>
                                        <ul className="sub-menu">                                            
                                            <li><Link to='/privacy-policy'>Policies Policy</Link></li>
                                            <li><Link to='/terms-condition'>Terms Condition</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a href="javascript:void(0)"><img className="svg-img" src="../assets/img/icons/drop.svg" alt="icon"/>Research</a>
                                        <ul className="sub-menu">
                                            <li><Link to='/'>Research 2</Link></li>
                                            <li><Link to='/'>Research 3</Link></li>
                                            <li><Link to='/'>Research 4</Link></li>
                                            <li><Link to='/'>Research 5</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to='/'>Team</Link></li>
                                    <li><Link to='/'>Board</Link></li>
                                    <li><Link to='/about'>About</Link></li>
                                    <li><Link to='/'>Home</Link></li>
                                    
                                </ul>
                                <div className="header-logo">
                                    <Link to='/'><img src="../assets/img/logo/1.png" alt="Site Logo" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="ir-side-cart-overlay"></div>
            <div id="ir-mobile-menu" className="ir-side-cart ir-mobile-menu">
                <div className="ir-menu-title">
                    <span className="menu_title">My Menu</span>
                    <button className="ir-close">×</button>
                </div>
                <div className="ir-nav-search search-field">
                    <form>
                        <div className="pseudo-search">
                        <button className="s-btn" type="submit"><img className="svg-img" src="../assets/img/icons/search.svg" alt="search"/></button>
                        <input type="text" placeholder="to look for....." autoFocus required/>
                    </div>
                </form>
                </div>
                <div className="ir-menu-inner">
                    <div className="ir-menu-content">
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/'>Board</Link></li>
                            <li><Link to='/'>Team</Link></li>
                            <li><a href="javascript:void(0)">Research</a>
                                <ul className="sub-menu">                                    
                                    <li><Link to='/'>Research 2</Link><a href="#"></a></li>
                                    <li><Link to='/'>Research 3</Link><a href="#"></a></li>
                                    <li><Link to='/'>Research 4</Link><a href="#"></a></li>
                                    <li><Link to='/'>Research 5</Link><a href="#"></a></li>
                                </ul>
                            </li>
                            <li><a href="javascript:void(0)">Policies</a>
                                <ul className="sub-menu">
                                    <li><Link to='/privacy-policy'>Policies Policy</Link></li>
                                    <li><Link to='/terms-condition'>Terms Condition</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="ir-header-bottons">
                    <Link to='/login' className="btn-1 m-r-10">Login</Link>
                    <Link to='/register' className="btn-2">Create Account</Link>
                </div>
            </div>        
        </header>
    </>
  )
}

export default Header