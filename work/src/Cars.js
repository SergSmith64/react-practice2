import React from 'react';
// import './cars.scss';

const cars = [
    {name: 'BMW', price: 2000, img: 'https://sergsmith64.ru/add/Bruce_Willis.jpg'}
]

console.log('__картинка из массива__', cars[0].img);

// function createCar
function createCar(props) {
    return (
        <div>
            {/* <img src={props.cars.img} className="App-logo" alt="logo" /> */}
            {/* <img src={props.car.img} alt={props.car.name} /> */}
            {/* <h3>{props.car.img}</h3> */}
            {/* <h3>{props.cars.price}</h3> */}
            <p>Просто Текст</p>
            <h3>{cars[0].price}</h3>
            <p>{cars[0].img}</p>
            <img src={cars[0].img} alt="logo" />
        </div>
    )
}

// function createCar() {
//     return (
//         <h1>Заголовок</h1>
//     )
// }

export default createCar;
