import React, { useState } from "react";
import styled from "styled-components";
import { navData } from "./data";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useTransition, animated } from "react-spring";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NavView() {
  const Data = navData;
  const [showMenu, setShowMenu] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [showWrapper, setshowWrapper] = useState(false);
  const toggleMenu = () => {
    setClicked(!clicked);
    setshowWrapper(!showWrapper);
  };
  
  console.log(clicked,showWrapper)

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%", transition: { delay: 0.5 } },
  };
  const menuTransitions = useTransition(showMenu, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: showMenu,
    delay: 200,
    // config: config.molasses,
    // onRest: () => set(!show),
  });

  return Data.map((item, i) => (
    <Navi key={i}>
      <Logo>
        <Link to="/">
          <img src={item.logo} alt="" />
        </Link>
      </Logo>
      <Links>
        <span
          onMouseOver={() => setShowMenu(true)}
          onMouseOut={() => setShowMenu(false)}
        >
          Solution <MdOutlineKeyboardArrowDown />
        </span>
        <span>Resources</span>
        <span>Pricing</span>
        <span>Company</span>
      </Links>
      <GetStarted>
        <Link to="/submitRequest">{item.btn}</Link>
      </GetStarted>
      <div
        className={
          clicked
            ? "hamburger hamburger--spring is-active"
            : "hamburger hamburger--spring"
        }
        onClick={toggleMenu}
      >
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </div>

      <Wrapper initial={false} animate={showWrapper ? "open" : "closed"} variants={variants}>
        <Link to="/support" onClick={toggleMenu}>Home</Link>
        <Link to="/support" onClick={toggleMenu}>Support Request</Link>
        <Link to="/enquiry" onClick={toggleMenu}>Product Enquiry</Link>
        <Link to="/solutions" onClick={toggleMenu}>Solution Assessment</Link>
        <Link to="/" onClick={toggleMenu}>Others</Link>
        <Link to="/" onClick={toggleMenu}>Resources</Link>
        <Link to="/" onClick={toggleMenu}>Pricing</Link>
        <Link to="/" onClick={toggleMenu}>Company</Link>
        <button className="get-started"><Link to="/submitRequest">submit request</Link></button>
      </Wrapper>
      {menuTransitions(
        (styles, item) =>
          item && (
            <animated.div
              style={styles}
              className="animate"
              onMouseOut={() => {
                setShowMenu(false);
              }}
              onMouseOver={() => {
                setShowMenu(true);
              }}
            >
              <Link to="/support">Support Request</Link>
              <Link to="/enquiry">Product Enquiry</Link>
              <Link to="/solutions">Solution Assessment</Link>
              <Link to="/">Others</Link>
            </animated.div>
          )
      )}
    </Navi>
  ));
}

export default NavView;

const Navi = styled.nav`
  width: 100%;
  height: 15vh;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  position: relative;
  .hamburger {
    @media (max-width: 768px) {
      display: block;
    }
    display: none;
  }
  .hamburger-box {
    width: 40px;
    height: 24px;
    position: relative;
    cursor: pointer;
  }
  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
  }
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 40px;
    height: 4px;
    background-color: #000;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  .hamburger-inner::before,
  .hamburger-inner::after {
    content: "";
    display: block;
  }
  .hamburger-inner::before {
    top: -10px;
  }
  .hamburger-inner::after {
    bottom: -10px;
  }
  .hamburger--spring .hamburger-inner {
    top: 2px;
    transition: background-color 0s 0.13s linear;
    /* color: #fff; */
  }
  .hamburger--spring .hamburger-inner::before {
    top: 10px;
    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .hamburger--spring .hamburger-inner::after {
    top: 20px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .hamburger--spring.is-active .hamburger-inner {
    transition-delay: 0.22s;
    background-color: transparent !important;
  }
  .hamburger--spring.is-active .hamburger-inner::before {
    top: 0;
    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 10px, 0) rotate(45deg);
  }
  .hamburger--spring.is-active .hamburger-inner::after {
    top: 0;
    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 10px, 0) rotate(-45deg);
  }
  .animate {
    width: 15%;
    height: 30vh;
    border-top: 4px solid #9c3233;
    border-bottom: 4px solid rgb(156, 50, 51);
    background: #fff;
    position: fixed;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    left: 25%;
    top: 12%;
    z-index: 10;
    a {
      display: block;
      border-top: 1px solid rgb(156, 50, 51);
      padding: 5%;
      text-decoration: none;
      color: rgb(156, 50, 51);
      transition: all 0.5s linear;
      &:hover {
        color: black;
      }
    }
  }
`;

const Logo = styled.a`
  @media (max-width: 768px) {
    width: 25%;
    height: 200px;
  }
  width: 15%;
  height: 100px;
  img {
    @media (max-width: 768px) {
      object-fit: contain;
    }
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Links = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    cursor: pointer;
  }
  a {
    margin-left: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3vw;
    font-weight: 500;
    text-decoration: none;
    color: #000;
  }
`;

const GetStarted = styled.button`
  @media (max-width: 768px) {
    display: none;
  }
  padding: 1% 3%;
  background: #9c3233;
  color: #fff;
  border: none;
  border-radius: 5px;
  a {
    color: #fff;
  }
`;
const Wrapper = styled(motion.div)`
  width: 80%;
  padding: 2%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background: #9c3233;
  z-index: 999999999;
  a {
    display: block;
    padding: 5% 2%;
    font-size: 1.5rem;
    text-decoration: none;
    color: white;
  }
  .get-started {
    padding: 2% 5%;
    margin-top: 5%;
    width: 80%;
    background: #fff;
    border: none;
    border-radius: 5px;
    a {
    color: #9c3233;
      font-size: 1.2rem;
    }
  }
`;
