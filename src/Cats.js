import { useEffect, useState } from "react";
import styled from "styled-components"
import { faker } from '@faker-js/faker';
import Cart from "./cart"

let cartAmount = null
let catPic = null
let catCostInBasket = null
const Cats = (props) => {
    const [inputAmount, setInputAmount] = useState("")
    const changeHandler = e => {
      setInputAmount(e.target.value)
    }

    const addToCart = (inputAmount, catWanted, catCost) => {
      props.catAmount = inputAmount
      props.catImage = catWanted
      props.catPrice = catCost
    }
    
    return (
      <>
      <Cart catAmount = {props.catAmount} catImage = {props.catImage} catPrice = {props.catPrice}/>
      <h3>Products</h3>
      <Container>
      {props.catArr.map((cat, index) => {
        let ranNum = (Math.random()*1000).toFixed(0)
        return (
        <div key= {index}>
            <CatContainer>
            <img src = {cat.url} alt="cat" width="160px" height="160px"/>
            <p>{faker.name.firstName()}</p>

            
            <p>COST: £{ranNum}</p>{/* // placeholder value */}
            <p>{inputAmount}</p>
            <input type="number" onChange={changeHandler}/>
            <button onClick={() => addToCart(inputAmount, cat.url, ranNum)}>Add to Cart +</button>
            <p>{cat.description}</p>
            </CatContainer>
        </div>
        )
      })}
      </Container>
    </>
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
