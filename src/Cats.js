import { useEffect, useState } from "react";
import styled from "styled-components"
import { faker } from '@faker-js/faker';
import Cart from "./cart"
let cartAmount = null




const Cats = (props) => {
  

    
    return (
      <>
      <Container>
      {props.id.map((cat, index) => {
        return (<CatInfo key={index} name={cat} id={index}></CatInfo>

        )
      })}
      </Container>
    </>
    )

}

const CatInfo =(props) =>{
  const [inputAmount, setInputAmount] = useState("")



 
  const changeHandler = e => {

    setInputAmount(e.target.value)
    console.log(inputAmount)
  }

  const [randName, setRandName] = useState("")
  const [randNum, setRandNum] = useState()
  useEffect (() => {
    const names =faker.name.firstName()
    const randNumb= (Math.random()*1000).toFixed(0) 
    setRandName(names)
    setRandNum(randNumb)
  }, [])

  const [basket , setBasket] = useState([])

  const addToCart = ( ) => {

    let storedCatInfo = [...basket];
    storedCatInfo.push(props.name.url, randName, inputAmount, randNum);
  
    setBasket(  storedCatInfo );
    console.log(storedCatInfo) 
  }
  return(
    <div >
    <CatContainer>
    <img src = {props.name.url} alt="cat" width="160px" height="160px"/>
    <p>{randName}</p>
   <p>COST: £{randNum}</p>
    <p>Total: £{randNum *inputAmount }</p>{/* // placeholder value */}
    <p>{inputAmount ? inputAmount: "0"}</p>
   
    <input type="number" value={inputAmount<=0 ? 0 : inputAmount} onChange={changeHandler}/>
    
    <button onClick={() =>addToCart(props.id)}>Add to Cart +</button>
    <p>{props.name.description}</p>
    </CatContainer>
</div>
  )
}


export default Cats

const CatContainer  = styled.div`
border: black 2px solid;
display: flex;
flex-direction: column;
justify-content: center;

`

const Container = styled.div`
width: 85vw;
height: 500px;
    background-color: skyblue;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
`
