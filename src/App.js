import { useEffect, useState } from "react";
import Cats from "./Cats";
import { faker } from '@faker-js/faker';
import Cart, { NavbarItem } from "./cart";
import Wrapper from './Wrapper'



const App = () => {



  const [randomCatArr, setRandomCatArr] = useState([])
  const fetchData =  async () => {
    try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=9&page=100&order=DESC%22")
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
    fetchData()// eslint-disable-next-line
    const names =faker.name.firstName()
  }, [])


  return (
    <>
 {/* {props.id.map((cat, index) => {} */}


    <h1>Cats4lyf</h1>

 
    <Cats id={randomCatArr} />
    </>
  );
}


<Wrapper></Wrapper>


export default App;

