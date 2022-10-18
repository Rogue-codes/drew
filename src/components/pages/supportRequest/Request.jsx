import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Request() {
  return (
    <Container>
        <Support>Support Request</Support>
        <Cards><Link to='/aad'>Active Directory</Link></Cards>
        <Cards>Azure Infrastructure</Cards>
        <Cards>M365 (Exchange Online,OneDrive, Teams)</Cards>
        <Cards>On-Premise (Active Directory, Exchange Server)</Cards>
    </Container>
  )
}

export default Request

const Container = styled.div`
    position: relative;
    width: 100%;
    margin-top: 5%;
    height: 40vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2%;
`
const Cards = styled.div`
    width: 22%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.1vw;
    background: rgb(156, 50, 51);
    border-radius: 5px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    a{
        color: white;
    }
`
const Support = styled.h1`
    position: absolute;
    top: 0;
    height: 10vh;
`