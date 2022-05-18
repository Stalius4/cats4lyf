import './App.css';
import { useEffect, useState } from "react";

const App = () => {
  const [randomCatArr, setRandomCatArr] = useState([])
  const fetchData =  async () => {
    try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
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
    <div>
        {randomCatArr.map((cat, index) => {
          return (
          <div key= {index} className="cat-container">
              <img src = {cat.url} alt="cat" width={"15%"}/>

          </div>
          
          )
          
        })}
    </div>
    </>
  );
}

export default App;
