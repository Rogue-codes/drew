import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Assesment } from "../../utils/assesmentData";

function SolutionAssesment() {
  return (
    <Container>
      <Supporrt>Solutions Assesment</Supporrt>
      <Header>
        <label htmlFor="">How can we help</label>
        <br />
        <input
          type="search"
          name=""
          id=""
          placeholder="search help articles...."
        />
      </Header>
      <Left>
        <CardFlex>
          {Assesment.map((support, i) => (
            <CardContainer key={i}>
              <Tittle>{support.name}</Tittle>
              <Image>
                <img src={support.logo} alt="" />
              </Image>
              <Faq>
                <Link to="/faq">{support.faq}</Link>
              </Faq>
            </CardContainer>
          ))}
        </CardFlex>
      </Left>
    </Container>
  );
}

export default SolutionAssesment;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;
const Tittle = styled.p`
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  color: black;
  font-size: 1.2vw;
  font-weight: 900;
`;
const Image = styled.div`
  width: 100%;
  height: 30vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Faq = styled.a`
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  text-decoration: none;
  color: black;
  font-size: 1.2vw;
  margin-top: 2%;
  cursor: pointer;
  a {
    text-decoration: none;
    color: #9c3233;
  }
`;
const Left = styled.div`
  @media (max-width: 767px) {
    width: 100%;
    padding: 5%;
  }
  padding-top: 1%;
  width: 100%;
  height: auto;
  left: 0;
  .links {
    @media (max-width: 767px) {
      width: 90%;
    }
    width: 80%;
    margin: 5% 5%;
    a {
      @media (max-width: 767px) {
        font-size: 1.2rem;
      }
      color: #9c3233;
      text-decoration: none;
      font-weight: 700;
    }
    p {
      @media (max-width: 767px) {
        font-size: 1rem;
        line-height: 30px;
      }
      margin-top: 2%;
      font-size: 1.2vw;
    }
  }
`;

const Header = styled.form`
  @media (max-width: 767px) {
    width: 90%;
    padding: 2% 5%;
  }
  width: 50%;
  margin: 2% 2%;
  label {
    @media (max-width: 767px) {
      font-size: 1rem;
    }
    font-family: "Alfa Slab One", cursive;
    font-size: 3vw;
  }
  input {
    @media (max-width: 767px) {
      height: 8vh;
      font-size: 1rem;
    }
    height: 8vh;
    width: 100%;
    border: none;
    padding-left: 2%;
    margin-top: 2%;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 5px;
    &:focus {
      outline: none;
      border: 2px solid #9c3233;
    }
    &::placeholder {
      @media (max-width: 768px) {
        font-size: 0.8rem;
      }
    }
  }
`;
const CardFlex = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
  }
  width: 100%;
  min-height: 70hv;
  display: flex;
  justify-content: space-between;
  padding: 2%;
`;
const CardContainer = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10%;
  }
  padding: 2%;
  width: 23%;
  height: 50vh;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 5px;
  height: auto;
`;
const Supporrt = styled.h1`
  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 2% 5%;
  }
  padding: 2%;
  font-size: 3vw;
  font-weight: 900;
  color: #9c3233;
`;
