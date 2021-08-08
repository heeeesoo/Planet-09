import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const UpdateForm = (props) => {
  const id = props.match.params.id;

  const [book, setBook] = useState({
    title: '',
    author: '',
    category: '',
    info: '',
    startDate: '',
    endDate: '',
    payDate: '',
    bank: '',
  });

  useEffect(() => {
    fetch('http://localhost:8001//book/' + id)
      .then((res) => res.json())
      .then((res) => {
        setBook(res);
      });
  }, []);

  const changeValue = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const submitBook = (e) => {
    e.preventDefault(); // submit이 action을 안타고 자기 할일을 그만함.

    fetch('http://localhost:8001//book/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(book),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((res) => {
        if (res !== null) {
          props.history.push('/book/' + id);
        } else {
          alert('책 수정에 실패하였습니다.');
        }
      });
  };

  return (
    <Form onSubmit={submitBook}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>제목</Form.Label>
        <Form.Control
          type="text"
          placeholder="제목을 입력해주세요."
          onChange={changeValue}
          name="title"
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>진행자</Form.Label>
        <Form.Control
          type="text"
          placeholder="진행자 개인이나 팀을 대표할 수 있는 이름을 입력하세요."
          onChange={changeValue}
          name="author"
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>분야</Form.Label>
        <Form.Control
          type="text"
          placeholder="분야를 입력하세요."
          onChange={changeValue}
          name="category"
        />
      </Form.Group>

     
      <Form.Group controlId="formBasicEmail">
      <Form.Label>분야</Form.Label>
      <Form>
        {['checkbox'].map((type) => (
         <div key={`inline-${type}`} className="mb-3">
           
          <Form.Check
            inline
            label="의류"
            type={type}
            id={`inline-${type}-1`}
            onChange={changeValue}
            name="category"
           />
           
          <Form.Check
            inline
            label="식품"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
            onChange={changeValue}
            name="category"
          />
          <Form.Check
            inline
            label="도서"
      
            type={type}
            id={`inline-${type}-3`}
            onChange={changeValue}
            name="category"
          />
          <Form.Check
            inline
            label="생활용품"
        
            type={type}
            id={`inline-${type}-4`}
            onChange={changeValue}
            name="category"
          />
          <Form.Check
            inline
            label="기타"
     
            type={type}
            id={`inline-${type}-5`}
            onChange={changeValue}
            name="category"
          />
          
          </div>
          ))}
        </Form>
        </Form.Group>
        

        <Form.Group controlId="formFile" className="mb-3">
       <Form.Label>대표이미지</Form.Label>
       <Form.Control 
          accept='image/jpg,impge/png,image/jpeg,image/gif'
          type="file"
          onChange={changeValue}
          name="url"
           />
        </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>상세정보</Form.Label>
        <Form.Control 
          as="textarea" rows={8} 
          placeholder="상세정보를 입력하세요."
          onChange={changeValue}
          name="info"
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>공구 시작일</Form.Label>
        <Form.Control
          type="text"
          placeholder="공구 시작일을 입력하세요."
          onChange={changeValue}
          name="startDate"
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>공구 종료일</Form.Label>
        <Form.Control
          type="text"
          placeholder="공구 종료일을 입력하세요."
          onChange={changeValue}
          name="endDate"
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>수요조사 참여자 결제 마감일</Form.Label>
        <Form.Control
          type="text"
          placeholder="수요조사 참여자 결제 마감일을 입력하세요."
          onChange={changeValue}
          name="payDate"
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>입금은행</Form.Label>
        <Form.Control
          type="text"
          placeholder="입금은행을 입력하세요."
          onChange={changeValue}
          name="bank"
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>계좌번호</Form.Label>
        <Form.Control
          type="text"
          placeholder="계좌번호를 입력하세요."
          onChange={changeValue}
          name="account"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default UpdateForm;
