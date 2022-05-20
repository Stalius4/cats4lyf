import { useEffect, useState } from "react";
import styled from "styled-components"
import { faker } from '@faker-js/faker';

const Cats = (props) => {
    return (
      <Container>
      {props.id.map((cat, index) => {
        return (
        <div key={index}>
        <CatInfo key={index} image={cat} catInfo={props.catInfo} setCatInfo={props.setCatInfo}
            basket={props.basket} setBasket={props.setBasket} id={index} cartTotalPrice = {props.cartTotalPrice} setCartTotalPrice = {props.setCartTotalPrice} cartTotalQuantity = {props.cartTotalQuantity} setCartTotalQuantity = {props.setCartTotalQuantity}/>
        </div>
        )
      })}
      </Container>
    )
}

const CatInfo =(props) =>{
  const [inputAmount, setInputAmount] = useState("")
  const changeHandler = e => {
    setInputAmount(e.target.value)
    // console.log(inputAmount)
  }

  const [randName, setRandName] = useState("")
  const [randNum, setRandNum] = useState()
  useEffect (() => {
    const names =faker.name.firstName()
    const randNumb= (Math.random()*1000).toFixed(0) 
    setRandName(names)
    setRandNum(randNumb)
  }, [])
  
  const addToCart = (totalPricePerCat, inputAmount) => {
    if (inputAmount > 0){
      // Cart items in array
      let catBasket =[...props.basket];
      catBasket.push([props.image.url, randName, inputAmount, randNum, totalPricePerCat]) // image, name, quantity, price
      props.setBasket(catBasket);
      // Cart Total price
      let currentTotalPrice = props.cartTotalPrice;
      props.setCartTotalPrice(Number(currentTotalPrice += totalPricePerCat));
      // Cart Total Amount
      let currentTotalAmount = Number(props.cartTotalQuantity);
      
      props.setCartTotalQuantity(currentTotalAmount += Number(inputAmount))
      // console.log(catBasket) 
    }
  }
  return(
    <div key={props.index}>

  <CatContainer>
    <img src = {props.image.url} alt="cat" width="160px" height="160px"/>
    <p>{randName}</p>
    <p>COST: £{randNum}</p>
    <p>Total: £{randNum * inputAmount}</p> {/* total price per cat */}
    <p>{inputAmount ? inputAmount: "0"}</p>
  
    <input type="number" min="0"  onChange={changeHandler}/>

    <button onClick={() =>addToCart((randNum * inputAmount), inputAmount)}>Add to Cart +</button>
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
