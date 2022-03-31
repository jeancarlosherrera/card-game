import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Pokecard from './Pokecard';

class Pokedex extends Component {
  render() {
    return (
      <>
        {this.props.isWinner ? (
          <h4 className='Pokedex-winner mt-3'> Winner!</h4>
        ) : (
          <h4 className='Pokedex-loser mt-3'>Loser!</h4>
        )}
        <h5> Total EXP: {this.props.exp}</h5>
        <Row>
          {this.props.pokemon.map((p) => (
            <Col key={p.id} md={3}>
              <Pokecard
                id={p.id}
                name={p.name}
                type={p.type}
                exp={p.base_experience}
              />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default Pokedex;
