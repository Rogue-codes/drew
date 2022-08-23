import React, { useState } from 'react'
import styled from 'styled-components'
import { navData } from './data'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { useTransition, animated } from 'react-spring'
import { Link } from 'react-router-dom'

function NavView() {
  const Data = navData
  const [showMenu, setShowMenu]= useState(false)

  const menuTransitions = useTransition(showMenu, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  reverse: showMenu,
  delay: 200,
    // config: config.molasses,
  // onRest: () => set(!show),
})

  return (
    Data.map((item)=>(
      <Navi>
        <Logo><img src={item.logo} alt="" /></Logo>
        <Links>
          <a href="#" onMouseOver={()=>setShowMenu(true)} onMouseOut={()=>setShowMenu(false)}>Solution <MdOutlineKeyboardArrowDown/></a>
          <a href="#">Resources</a>
          <a href="#">Pricing</a>
          <a href="#">Company</a>
        </Links>
        <GetStarted>{item.btn}</GetStarted>

        {
        menuTransitions(
        (styles, item) => item && <animated.div style={styles} className='animate' onMouseOut={()=>{setShowMenu(false)}} onMouseOver={()=>{setShowMenu(true)}}>
          <a href="#" to='/'>Support Request</a>
          <a href="#" to='/'>Product Enquiry</a>
          <a href="#">Solution Assessment</a>
          <a href="#">Others</a>       
        </animated.div>
        )
      }
      </Navi>
    ))    
  )
}

export default NavView

const Navi = styled.nav`
  width: 100%;
  height: 15vh;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  .animate{
        width: 15%;
        height: 30vh;
        border-top: 4px solid  rgb(156, 50, 51);
        border-bottom: 4px solid  rgb(156, 50, 51);
        background: #fff;
        position: fixed;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        left: 25%;
        top: 12%;
        a{
          display: block;
          border-top: 1px solid rgb(156, 50, 51);
          padding: 5%;
          text-decoration: none;
          color: rgb(156, 50, 51);
          transition: all .5s linear;
          &:hover {
            color: black;
          }
        }
    }
`

const Logo = styled.div`
  width: 15%;
  height: 100px;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Links = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a{
    margin-left: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3vw;
    font-weight: 500;
    text-decoration: none;
    color: #000;
  }
`

const GetStarted = styled.button`
  padding: 1% 3%;
  background: rgb(156, 50, 51);
  color: #fff;
  border: none;
  border-radius: 5px;
`