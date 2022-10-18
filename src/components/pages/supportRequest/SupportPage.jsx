import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { support } from '../../utils/data'

function Support() {
  return (
    <Container>
        <Supporrt>Support Request</Supporrt>
        <Left>
            <CardFlex>
            {
                support.map((support,i)=>(
                    <CardContainer key={i}>
                    <Tittle>{support.name}</Tittle>
                    <Image>
                        <img src={support.logo} alt="" />
                    </Image>
                    <Faq><Link to='/faq'>{support.faq}</Link></Faq>
                </CardContainer>
                ))
            }

            </CardFlex>

            <Header>
                <label htmlFor="">How can we help</label><br />
                <input type="search" name="" id="" placeholder="search help articles...." />
            </Header>
        </Left>
    </Container>
  )
}

export default Support

const Container = styled.div`
    @media (max-width: 767px) {
        flex-direction: column;
    }
    width: 100%;
    height: auto;
    justify-content: flex-start;
    align-items: center;
    position: relative;
`
const Tittle = styled.p`
    color: black;
    font-size: 1vw;
` 
const Image = styled.div`
    width: 100%;
    height: 30vh;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const Faq = styled.a`
    text-decoration: none;
    color:black;
    font-size: 1vw;
    margin-top: 2%;
    cursor: pointer;
`
const Left = styled.div`
    @media (max-width: 767px) {
        width: 90%;
    }
    padding-top: 1%;
    width: 100%;
    height: auto;
    left: 0;
    .links{
        @media (max-width: 767px) {
            width: 90%;
        }
        width: 80%;
        margin: 5% 5%;
        a{
            @media (max-width: 767px) {
                font-size: 1.2rem;
            }
            color: #9c3233;
            text-decoration: none;
            font-weight: 700;
        }
        p{
            @media (max-width: 767px) {
                font-size: 1rem;
                line-height: 30px;
            }
            margin-top: 2%;
            font-size: 1.2vw;
        }
    }
`



const Header = styled.form`
    @media (max-width: 767px) {
        width: 90%;
    }
    width: 50%;
    margin: 10% 5%;
    label{
        @media (max-width: 767px) {
            font-size: 2rem;
        }
        font-family: 'Alfa Slab One', cursive;
        font-size: 3vw;
    }
    input{
        @media (max-width: 767px) {
            height: 6vh;
        }
        height: 8vh;
        width: 100%;
        border: none;
        padding-left: 2%;
        margin-top: 2%;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        border-radius: 5px;
        transition: all .2s linear;
        &:focus{
            outline: none;
            border: 3px solid #9c3233;
            transition: all .2s linear;
        }
    }
`
const CardFlex = styled.div`
    width: 100%;
    min-height: 70hv;
    display: flex;
    justify-content: space-between;
    padding: 2%;
`
const CardContainer = styled.div`
    padding: 2%;
    width: 23%;
    height: 50vh;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
    height: auto;
`
const Supporrt = styled.h1`
    padding: 2%;
    font-size: 3vw;
    font-weight: 900;
`