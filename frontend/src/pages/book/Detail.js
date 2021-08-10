import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import '../../planet_css/detail.css';
import '../../planet_css/detail_grid.css';
import test1 from '../../img/test1.PNG';
import profile from '../../img/profile.PNG';
import test2 from '../../img/test2.jpg';

const Detail = (props) => {
  console.log('detail', props);
  const id = props.match.params.id;

  const [book, setBook] = useState({
    id: '',
    title: '',
    author: '',
    info: '',
    startDate: '',
    endDate: '',
    payDate: '',
    bank: '',
    account: '',
    url:'',
    price:'',
  });

  useEffect(() => {
    fetch('http://localhost:8001//book/' + id)
      .then((res) => res.json())
      .then((res) => {
        setBook(res);
      });
  }, []);

  const deleteBook = () => {
    fetch('http://localhost:8001//book/' + id, {
      method: 'DELETE',
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === 'ok') {
          props.history.push('/');
        } else {
          alert('삭제실패');
        }
      });
  };

  const updateBook = () => {
    props.history.push('/updateForm/' + id);
  };


  const buyBook = () => {
    props.history.push('/buyhome/buy/' + id);
  };

  const style_detail = {
    detail:{
    alignItems: "center",
    }
  }

  

  return (
    <div className = "container3">


      <div className = "item_1">

        <br/>
        <Button variant="warning" onClick={updateBook}>
          수정
        </Button>
          {'  '}
        <Button variant="danger" onClick={deleteBook}>
          삭제
        </Button>
        <hr />

      </div>


      <div className = "item_2">

        <div id="title">
          <span class="category">{book.category}</span>
          <h2>{book.title}</h2>
        <span class="present">공구 진행중</span>

      </div>

      </div>


      <div className = "item_3">
        <hr/>
        <div class="imagestyle">
        <img alt="test2" src={test2} />
        </div>
        <hr/>
      </div>


      <div className = "item_4_1">        
        <hr/>
          <h4>작성자 : {book.author}</h4>
          <h4>공구 은행 : {book.bank}</h4>
          <h4>계좌 번호 : {book.account}</h4>         
      </div>


      <div className = "item_4_2">
      <hr/>
        <h4>가격 : {book.price}</h4>
        <h4>공구 시작일 : {book.startDate}</h4>
        <h4>마감 날짜 : {book.endDate}</h4>
        <h4>수요조사 참여자 결제 마감일 : {book.payDate}</h4>
      </div>
      

      <div className = "item_4_3">
        <hr/>

        <div class="content_button">
          <Button class="participate" onClick={buyBook}> 
          공동구매 참여 
          </Button>
          {'      '}
          <button class="heart">♡</button>
         </div>
        
      </div>


      <div className = "item_5">
        <hr/>
        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="link-2">상세정보</Nav.Link>
            
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">공지사항</Nav.Link>
          </Nav.Item>
         
        </Nav>
        <br/>
        <div class="info">
          {book.info}
        </div>
        <hr/>
      </div>

    
   

    </div>
  );
};

export default Detail;
