import { useEffect, useState } from "react";
import styled from "styled-components"
import { faker } from '@faker-js/faker';
import Cart from "./cart"
let cartAmount = null
const Cats = (props) => {
    const [inputAmount, setInputAmount] = useState("")
    const changeHandler = e => {
      setInputAmount(e.target.value)
    }

    const addToCart = (amountWanted, catWanted) => {
      cartAmount = amountWanted
    }
    
    return (
      <>
      <Cart amount = {props.inputAmount}/>
      <h3>Products</h3>
      <Container>
      {props.id.map((cat, index) => {
        return (
        <div key= {index}>
            <CatContainer>
            <img src = {cat.url} alt="cat" width={"15%"}/>
            <p>{faker.name.firstName()}</p>
            </CatContainer>
            <p>COST: £{(Math.random()*1000).toFixed(0)}</p>{/* // placeholder value */}
            <p>{inputAmount}</p>
            <input type="number" onChange={changeHandler}/>
            <button onClick={() => addToCart(inputAmount, cat.url)}>Add to Cart +</button>
            <p>{cat.description}</p>
        </div>
        )
      })}
      </Container>
    </>
    )

}

export default Cats

const CatContainer  = styled.div`

`

const Container = styled.div`
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around; */
`
