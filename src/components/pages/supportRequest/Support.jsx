import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { popular, support } from './supportArr'

function Support() {
  return (
    <Container>
        <Left>
            <Header>
                <label htmlFor="">How can we help</label><br />
                <input type="search" name="" id="" placeholder="search help articles...." />
            </Header>

            <Popular>Popular articles</Popular>

            <div>
                {
                    support.map((sup,index)=>(
                        <div key={index} className='links'>
                            <Link to='/'>{sup.title}</Link>
                            <p>{sup.desc}</p>
                        </div>
                    ))
                }
            </div>
        </Left>

        <Right>
            <h1>Contact support</h1>
            <p>24×7 help from our support staff</p>

            <hr />

            <p className="pop">
                Popular topics
            </p>

            {
                popular.map((pop,i)=>(
                    <Link to='/'>{pop.title}</Link>
                ))
            }
        </Right>


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
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
`
const Left = styled.div`
    @media (max-width: 767px) {
        width: 90%;
    }
    width: 70%;
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

const Right = styled.div`
    @media (max-width: 767px) {
        position: relative;
        width: 90%;
    }
    width: 30%;
    height: auto;
    background: #f8f8f8;
    position: sticky;
    right: 0;
    margin: 2%;
    h1{
        @media (max-width: 767px) {
            font-size: 2rem;
        }
        font-size: 1.3vw;
        margin: 5%;
    }
    p{
        @media (max-width: 767px) {
            font-size: 1.2rem;
        }
        font-size: 1vw;
        margin: 5%;
    }
    hr{
        width: 90%;
    }
    .pop{
        @media (max-width: 767px) {
            font-size: 1.2rem;
        }
        font-size: 1.2vw;
        margin-top: 5%;
    }
    a{
        @media (max-width: 767px) {
            font-size: 1rem;
        }
        display: block;
        margin: 5%;
        color: #9c3233;
        font-size: 1vw;
        text-decoration: none;
    }
`

const Header = styled.form`
    @media (max-width: 767px) {
        width: 90%;
    }
    width: 70%;
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
const Popular = styled.p`
    margin-left: 5%;
    font-size: 1.5vw;
    font-weight: 700;
`