import React from 'react'
import styled from 'styled-components'

function FirstSection() {
  return (
    <Container>
        <div className="flex">
        <p>Welcome to our</p>
        <h1>SUPPORT PORTAL</h1>
        <p>African Cloud Company</p>
        </div>
    </Container>
  )
}

export default FirstSection

const Container = styled.div`
    width: 100%;
    height: 85vh;
    background: linear-gradient(90deg, #0e021552 0%, #121111cf 32%, #09090941 100%),url('/bg.png');
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-position: 10% 50%;
    display: flex;
    justify-content: flex-end;
    padding-right: 2%;
    .flex{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        h1{
            font-size: 5vw;
            font-family: 'Spectral', serif;
            font-weight: 900;
            color:white;
            .sa{
                color: #000;
            }
        }
        p{
            font-size: 3vw;
            color:#ffff;
            font-family: 'Spectral', serif;
            font-weight: 500;
        }
    }
`