import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState} from 'react';
import Item from './componentes/Item/Item';
import Chat from './componentes/Chat/Chat.jsx';
import Navbar from './componentes/navBar/navBar';

const itemsData = [
  {
    title: "Camiseta clásica blanca",
    price: 20.99,
    stock: 50,
    description: "Una camiseta blanca clásica y cómoda para cualquier ocasión.",
    img: "https://tennisecuador.vtexassets.com/arquivos/ids/555790-1600-auto?v=637993952033300000&width=1600&height=auto&aspect=true"
  },
  {
    title: "Camiseta estampado floral",
    price: 25.99,
    stock: 35,
    description: "Una camiseta con un hermoso estampado floral, perfecta para la primavera.",
    img: "https://tennisecuador.vtexassets.com/arquivos/ids/634294-500-auto?v=638182886324530000&width=500&height=auto&aspect=true"
  },
  {
    title: "Camiseta deportiva",
    price: 29.99,
    stock: 20,
    description: "Una camiseta deportiva diseñada para brindar comodidad durante el ejercicio.",
    img: "https://tennisecuador.vtexassets.com/arquivos/ids/607234-500-auto?v=638127964285670000&width=500&height=auto&aspect=true"
  },
  {
    title: "Camiseta manga larga a rayas",
    price: 22.50,
    stock: 15,
    description: "Una camiseta con mangas largas y un estampado de rayas para el otoño.",
    img: "https://tennisecuador.vtexassets.com/arquivos/ids/631897-500-auto?v=638182322766830000&width=500&height=auto&aspect=true"
  },
  {
    title: "Camiseta diseño vintage",
    price: 27.95,
    stock: 10,
    description: "Una camiseta con diseño vintage y colores llamativos.",
    img: "https://tennisecuador.vtexassets.com/arquivos/ids/628517-500-auto?v=638180685434870000&width=500&height=auto&aspect=true"
  },
  {
    title: "Camiseta temática de películas",
    price: 24.99,
    stock: 5,
    description: "Una camiseta con estampados de tus películas favoritas.",
    img: "https://vasari.vteximg.com.br/arquivos/ids/212024-1000-1000/VCO34501-NG-12.jpg?v=638074040120900000"
  },
  {
    title: "Camiseta divertida",
    price: 18.75,
    stock: 30,
    description: "Una camiseta con un diseño divertido que te hará sonreír.",
    img: "https://tennisecuador.vtexassets.com/arquivos/ids/630377-800-auto?v=638181546288130000&width=800&height=auto&aspect=true"
  },
  {
    title: "Camiseta básica negra",
    price: 19.99,
    stock: 40,
    description: "Una camiseta básica de color negro, ideal para combinar con cualquier outfit.",
    img: "https://tennisecuador.vtexassets.com/arquivos/ids/599254-500-auto?v=638125249273230000&width=500&height=auto&aspect=true"
  },
  {
    title: "Camiseta de verano estampada",
    price: 26.50,
    stock: 25,
    description: "Una camiseta ligera y fresca con un estampado veraniego.",
    img: "https://tennisecuador.vtexassets.com/arquivos/ids/592202-500-auto?v=638064008533400000&width=500&height=auto&aspect=true"
  },
  {
    title: "Camiseta elegante para ocasiones especiales",
    price: 34.99,
    stock: 8,
    description: "Una camiseta elegante con detalles únicos para ocasiones especiales.",
    img: "https://tennisecuador.vtexassets.com/arquivos/ids/571464-500-auto?v=638036311302130000&width=500&height=auto&aspect=true"
  }
];

function App () {
  const [ItemCount, setItemCount] = useState ('4');
  const [clicks, setClicks] = useState (0);
  function handleClick () {
    if (clicks < ItemCount) {
      setClicks (clicks + 1);
    } else {
      alert ('Ya no hay mas items en stock');
    }
  }
  function handleClickResta () {
    if (clicks > 0) {
      setClicks (clicks - 1);
    }
  }
  return (
    <div>
     <Navbar />
      <h2>Bienvenido a mi tienda de camisetas</h2>
      <div>
      <ul>
        {itemsData.map ((item) => <Item {...item}></Item>)
        
       }
      </ul>
    </div>
    </div>
  );
}

export default App;
