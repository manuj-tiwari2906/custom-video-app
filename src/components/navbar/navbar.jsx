import React from "react";
import "./navbar.scss";
import { Button, Menu } from "antd";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { PlayLogo } from "../../assets";
// import { Logo } from "../../img";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getSelectedKey = () => {
    const path = location.pathname;
    if (path.includes("/home")) return "home";
    if (path.includes("/faq")) return "faq";
    if (path.includes("/dashboard")) return "dashboard";
    return "";
  };

  return (
    <div className="navbars">
      <div className="navbar-container">
        <div className="left-section">
          <div className="logo"></div>
          <img
          src={PlayLogo}
          onClick={() => navigate("/home")}
          className="logo-img"
          alt="logo"
        />
        </div>
        <div className="right-section">
          <div className="right-menu-items">
            <Menu mode="horizontal" selectedKeys={[getSelectedKey()]}>
              <Menu.Item key="home">
                <Link to="/home" className="nav-item-bottom">
                  Home
                </Link>
              </Menu.Item>
              <Menu.Item key="faq">
                <Link to="/faq" className="nav-item-bottom">
                  FAQ
                </Link>
              </Menu.Item>
              <Menu.Item key="dashboard">
                <Link to="/dashboard" className="nav-item-bottom">
                  Dashboard
                </Link>
              </Menu.Item>
            </Menu>
            {/* <a to="/home">Home</a>
          <a to="/faq">FAQ</a>
          <a to="/dashboard">Dashboard</a> */}
          </div>
          <Button
            onClick={() => navigate("/login")}
            type="primary"
            className="menu-button pulse"
          >
            {"Login"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
