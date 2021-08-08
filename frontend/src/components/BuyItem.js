import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BuyItem = (props) => {
    const {id, name} = props.buy;
    return (
        <Card>
      < Card.Body>
        <Card.Title>{name}</Card.Title>
        <Link to={'/buyhome/buy/' + id} className="btn btn-primary">
          상세보기
        </Link>
      </Card.Body>
    </Card>
    );
};

export default BuyItem;