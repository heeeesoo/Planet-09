import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';


const Buy = (props) => {
  //const id = props.match.params.id;

  const [buy, setBuy] = useState({
    //id:'',
    name: '',
    product: '',
    money:'',
  });



  const changeValue = (e) => {
    setBuy({
      ...buy,
      [e.target.name]: e.target.value,
    });
  };

  const submitBuy = (e) => {
    e.preventDefault(); // submit이 action을 안타고 자기 할일을 그만함.

    fetch('http://localhost:8001//buyhome/buy/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(buy),
    })
      .then((res) => {
        if (res.status === 201) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((res) => {
        if (res !== null) {
          props.history.push('/buyHome/buy/');
        } else {
          alert('주문 폼 등록에 실패하였습니다.');
        }
      });
  };

  return(

    <Form onSubmit={submitBuy}>

    <Form.Group controlId="formBasicEmail">
        <Form.Label>name</Form.Label>
        <Form.Control
          type="text"
          placeholder="입금자명을 입력하세요."
          onChange={changeValue}
          name="name"
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>product</Form.Label>
        <Form.Control
          type="text"
          placeholder="상품 이름을 입력하세요."
          onChange={changeValue}
          name="product"
        />
      </Form.Group>

      
      <Form.Group controlId="formBasicEmail">
        <Form.Label>money</Form.Label>
        <Form.Control
          type="text"
          placeholder="입금한 금액을 입력하세요."
          onChange={changeValue}
          name="money"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

      </Form>

  );

  
};

export default Buy;