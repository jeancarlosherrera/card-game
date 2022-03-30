import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const IMG_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);

class Pokecard extends Component {
  render() {
    let imgSrc = `${IMG_API}${padToThree(this.props.id)}.png`;
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
