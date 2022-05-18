import './App.css';
import { useEffect, useState } from "react";
import Cats from "./Cats"
import Cart from "./cart"

const App = () => {

  

  const [randomCatArr, setRandomCatArr] = useState([])
  const fetchData =  async () => {
    try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=9&page=100&order=DESC")
    const data = await response.json()
    if (!response.ok){
      throw new Error(response.statusText)
    }
    console.log(response)
    setRandomCatArr(data)
    console.log(randomCatArr)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect (() => {
    fetchData()// eslint-disable-next-line
  }, [])
  return (
    <>
    <h1>Cats4lyf</h1>
    {/* <Cart/> */}
    <Cats id={randomCatArr} amount = ""/>
    </>
  );
}




export default App;
