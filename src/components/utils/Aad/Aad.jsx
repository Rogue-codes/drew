import React from 'react'
import styled from 'styled-components'
import AccordionComponent from '../../pages/FAQ/AccordionComponent'

function Aad() {
  return (
    <Container>
        <Heading>
            Most common Active Directory issues
        </Heading>
        <AccordionContainer>
        <AccordionComponent/>
        </AccordionContainer>

    </Container>
  )
}

export default Aad

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    border: 1px solid #000;
`
const Heading = styled.h2`
    padding: 2% 5%;
`
const AccordionContainer = styled.div`
width: 60%;
border: 5px solid #000;
margin-left: 5%;
`