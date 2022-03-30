import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import React, { Component } from 'react';
const IMG_API =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokecard extends Component {
  render() {
    let imgSrc = `${IMG_API}${this.props.id}.png`;
    return (
      <div>
        <Container className='text-center'>
          <Row>
            <Col>
              <Card className='mt-3' style={{ width: '18rem' }}>
                <Card.Img variant='top' src={imgSrc} alt={this.props.name} />
                <Card.Body>
                  <Card.Title>{this.props.name}</Card.Title>
                  <ListGroup variant='flush'>
                    <ListGroup.Item>Type: {this.props.type}</ListGroup.Item>
                    <ListGroup.Item>EXP: {this.props.exp}</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Pokecard;
