import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import BookItem from '../../components/BookItem';
import logo from '../../planet_css/logo.svg';
import test2 from '../../img/test2.jpg';
import '../../planet_css/home_grid.css';
import '../../planet_css/home.css';

const Home = () => {
  const [books, setBooks] = useState([]);

  // 함수 실행시 최초 한번 실행되는 것 + 상태값이 변경될때마다 실행
  useEffect(() => {
    fetch('http://localhost:8001//book/') //fetch() : 데이터 요청하는 것
      .then((res) => res.json())
      .then((res) => {
        setBooks(res);
      }); // 비동기 함수
  }, []);// [] -> 한번만 실행하게

  return (
    
    <div className = "item4_2">
      {books.map((book) => (
        <BookItem key={book.id} book={book} />   
      ))}

    </div>
  
   
    
  );
};

export default Home;
