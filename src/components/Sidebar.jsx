import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import TeraLogo from "../images/tera-logo.png";
import UserImage from "../images/user-img.jpg";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}


function Sidebar() {
  const { height, width } = useWindowDimensions();
  const wrapperRef = useRef(null);
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleSideBar = () => {
    if(width > 1200) return;
    const sidebar = document.querySelector(".sidebar");
    if (isOpen) {
      sidebar.style.display = "block";
      sidebar.style.transform = "translateX(0%)";
    }
    if (!isOpen) {
      sidebar.style.display = "none";
      sidebar.style.transform = "translateX(-100%)";
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        if (menuRef.current && !menuRef.current.contains(event.target))
          setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  useEffect(() => {
    handleSideBar();
  }, [isOpen]);
  return (
    <>
      <span
        ref={menuRef}
        onClick={() => setIsOpen(!isOpen)}
        className="material-icons menu-show"
      >
        menu
      </span>
      <div className="sidebar" ref={wrapperRef}>
        <div className="header">
          <img className="logo" alt="Tera logo" src={TeraLogo}></img>
        </div>
        <div className="main">
          <div className="user-info">
            <div className="user-img">
              <img src={UserImage} alt="User"></img>
            </div>
            <div className="info">
              <p>John Doe</p>
              <span>johndoe@gmail.com</span>
            </div>
          </div>
          <nav-menu>
            <NavLink
              className={({ isActive }) =>
                isActive ? "selected nav-item" : "nav-item"
              }
              to="/dashboard"
            >
              <div className="icon material-icons">dashboard</div>
              <span>Overview</span>
            </NavLink>
            <NavLink
              to="tickets"
              className={({ isActive }) =>
                isActive ? "selected nav-item" : "nav-item"
              }
            >
              <div className="icon material-icons">description</div>
              <span>Tickets</span>
            </NavLink>
          </nav-menu>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
