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
  const addToCart = (amountWanted, catWanted) => {
    cartAmount = amountWanted
  }
  const changeHandler = e => {

    setInputAmount(e.target.value)
    console.log(inputAmount)
  }

  const [randName, setRandName] = useState("")
  useEffect (() => {
    const names =faker.name.firstName()
    setRandName(names)
  }, [])


  return(
    <div >
    <CatContainer>
    <img src = {props.name.url} alt="cat" width="160px" height="160px"/>
    <p>{randName}</p>
   
    <p>COST: £{(Math.random()*1000).toFixed(0)}</p>{/* // placeholder value */}
    <p>{inputAmount ? inputAmount: "0"}</p>
   
    <input type="number" value={inputAmount<=0 ? 0 : inputAmount} onChange={changeHandler}/>
    
    <button onClick={() => addToCart(inputAmount, props.name.url)}>Add to Cart +</button>
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
