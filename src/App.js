import './App.css';
import { useEffect, useState } from "react";
import Cats from "./Cats"
import Cart from "./cart"
// import { faker } from '@faker-js/faker';

const App = () => {
  const [basket , setBasket] = useState([])// cat image
  const [catInfo , setCatInfo] = useState([])// name, quantity, price
  const [cartTotalPrice, setCartTotalPrice] = useState("0")
  const [cartTotalQuantity, setCartTotalQuantity] = useState("0")
  

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
        console.log(err)
    }
  }
  
  
  useEffect (() => {
    fetchData()
    // const names =faker.name.firstName()
  }, [])


  return (
    <>
 {/* {props.id.map((cat, index) => {} */}


    <h1>Cats4lyf</h1>
    <Cart basket={basket} setBasket = {setBasket} catInfo={catInfo} cartTotalPrice = {cartTotalPrice} setCartTotalPrice = {setCartTotalPrice} cartTotalQuantity = {cartTotalQuantity} setCartTotalQuantity = {setCartTotalQuantity}/>
    <Cats id={randomCatArr} basket={basket} setBasket={setBasket} catInfo={catInfo} setCatInfo={setCatInfo} cartTotalPrice = {cartTotalPrice} setCartTotalPrice = {setCartTotalPrice} cartTotalQuantity = {cartTotalQuantity} setCartTotalQuantity = {setCartTotalQuantity}/>

    

  
    </>
  );
}




export default App;
