import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
const IMG_API =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokecard extends Component {
  render() {
    let imgSrc = `${IMG_API}${this.props.id}.png`;
    return (
      <>
        <Card className='Pokecard m-3 p-3 rounded'>
          <Card.Img src={imgSrc} alt={this.props.name} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <ListGroup variant='flush'>
              <ListGroup.Item>Type: {this.props.type}</ListGroup.Item>
              <ListGroup.Item>EXP: {this.props.exp}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Pokecard;
