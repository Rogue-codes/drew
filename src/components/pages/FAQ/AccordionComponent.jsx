import Accordion from 'react-bootstrap/Accordion';
import styled from 'styled-components';
import { AAD } from '../../utils/Aad/aadData';

function AccordionComponent() {
  return (
    <Container>
      <Accordion defaultActiveKey="0">
        {
          AAD.map((item)=>(
            <Accordion.Item eventKey={item.id}>
            <Accordion.Header>{item.question}</Accordion.Header>
            <Accordion.Body>
              {item.Answer}
            </Accordion.Body>
          </Accordion.Item>
          ))
        }
      </Accordion>
    </Container>
  );
}

export default AccordionComponent;

const Container = styled.div`
  width: 60%;
  margin: auto;
  margin-top: 10%;
`