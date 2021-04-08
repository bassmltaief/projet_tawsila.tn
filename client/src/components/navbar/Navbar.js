import { Link } from "react-router-dom";
import { React, useEffect } from "react";
import { logout } from "../../js/actions/userAction";
import "./navbar.css";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(logout());
  };
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  useEffect(() => {
    //   const menu = document.querySelector(".menu");
    // const navOpen = document.querySelector(".hamburger");
    // const navClose = document.querySelector(".close");
    // const navLeft = menu.getBoundingClientRect().left;
    // navOpen.addEventListener("click", () => {
    //   if (navLeft < 0) {
    //     menu.classNameList.add("show");
    //     document.body.classNameList.add("show");
    //     navBar.classNameList.add("show");
    //   }
    // });
    // navClose.addEventListener("click", () => {
    //   if (navLeft < 0) {
    //     menu.classNameList.remove("show");
    //     document.body.classNameList.remove("show");
    //     navBar.classNameList.remove("show");
    //   }
    // });
    // Fixed Nav
    // const navBar = document.querySelector(".nav");
    // const navHeight = navBar.getBoundingClientRect().height;
    // window.addEventListener("scroll", () => {
    //   const scrollHeight = window.pageYOffset;
    //   if (scrollHeight > navHeight) {
    //     navBar.classNameList.add("fix-nav");
    //   } else {
    //     navBar.classNameList.remove("fix-nav");
    //   }
    // });
  }, []);

  return (
    <nav className="nav">
      <div className="navigation container">
        <div className="logo">
          <h1>
            Tawsila<span>.tn</span>
          </h1>
        </div>

        <div className="menu">
          <div className="top-nav">
            <div className="logo">
              <h1>
                Developper<span>.</span>
              </h1>
            </div>
            <div className="close">
              <i className="fas fa-times"></i>
            </div>
          </div>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/Home" className="nav-link scroll-link">
                Home
              </Link>
            </li>

          
            <li className="nav-item">
              <Link to="/annance" className="nav-link scroll-link">
                annance
              </Link>
            </li>
<div>
            {isAuth ? (
            <li className="nav-item">
              
                <Link to="/login" className="nav-link scroll-link">
                  <Button variant="outline-info" onClick={logoutUser}>
                    Logout
                  </Button>
                </Link></li>
                
              ) : (
                <li>
                <Link to="/register" className="nav-link scroll-link">
                  <Button variant="outline-info">Login</Button>
                </Link></li>
              )}
              
              </div>
              <li className="nav-item">
              <Link to="/contact" className="nav-link scroll-link">
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link scroll-link">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className="hamburger">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
