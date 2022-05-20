import './App.css';
import { useEffect, useState } from "react";
import Cats from "./Cats"
import Cart from "./cart"
import { faker } from '@faker-js/faker';
import logo from './logo';
import styled from 'styled-components';

const App = () => {
  const [basket , setBasket] = useState([])// cat image
  const [catInfo , setCatInfo] = useState([])// name, quantity, price
  

  const [randomCatArr, setRandomCatArr] = useState([])
  const fetchData =  async () => {
    try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=9&page=100&order=DESC")
    const data = await response.json()
    if (!response.ok){
      throw new Error(response.statusText)
    }
    // console.log(response)
    setRandomCatArr(data)
    // console.log(randomCatArr)
    } catch (err) {
      // console.log(err)
    }
  }
  
 
  useEffect (() => {
    fetchData()
    const names =faker.name.firstName()
  }, [])


  return (
    <>
 {/* {props.id.map((cat, index) => {} */}

<div>
  <Logo src={logo}></Logo>

  </div>



   <Cart basket={basket} catInfo={catInfo}/>
   <Cats id={randomCatArr} basket={basket} setBasket={setBasket} catInfo={catInfo} setCatInfo={setCatInfo}/>

  
   
  
    </>
  );
}

export default App;

const Logo = styled.img`
width:200px;
height:200px

`