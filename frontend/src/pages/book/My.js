import React, { useEffect, useState } from 'react';
import '../../planet_css/home_grid.css';
import '../../planet_css/home.css';
import BuyItem from '../../components/BuyItem';

const My = () => {
    const [buys, setBuy] = useState([]);

    // 함수 실행시 최초 한번 실행되는 것 + 상태값이 변경될때마다 실행
    useEffect(() => {
        fetch('http://localhost:8001//buyHome/buy/') //fetch() : 데이터 요청하는 것
            .then((res) => res.json())
            .then((res) => {
            setBuy(res);
        }); // 비동기 함수
    }, []);// [] -> 한번만 실행하게

    return (
        <div>
            zs
        {buys.map((buy) => (
        <BuyItem key={buy.id} buy={buy} />   
        ))}
        </div>
    );
};

export default My;