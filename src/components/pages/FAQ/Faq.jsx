import React from 'react'
import styled from 'styled-components'
import AccordionComponent from './AccordionComponent'

function Faq() {
  return (
    <Container>
        <AccordionComponent/>
    </Container>
  )
}

export default Faq

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
`