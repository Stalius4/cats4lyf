import { useEffect, useState } from "react";
import styled from "styled-components"
import { faker } from '@faker-js/faker';






const Cats = (props) => {
  

    
    return (
      <>
      <Container>
      {props.id.map((cat, index) => {
        return (<CatInfo key={index} image={cat} 
          basket={props.basket} setBasket={props.setBasket} id={index}></CatInfo>

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

 

  const addToCart = ( ) => {
    let storedCatInfo = [...props.basket];
    storedCatInfo.push([props.image.url, randName, inputAmount, randNum]);// use [] to bundle cats info in 1 array
    props.setBasket(  storedCatInfo );

    console.log(storedCatInfo) 
  }
  return(
    <div >
      {}
    <CatContainer>
    <img src = {props.image.url} alt="cat" width="160px" height="160px"/>
    <p>{randName}</p>
   <p>COST: £{randNum}</p>
    <p>Total: £{randNum *inputAmount }</p>{/* // placeholder value */}
    <p>{inputAmount ? inputAmount: "0"}</p>
   
    <input type="number" min="0"  onChange={changeHandler}/>
    
    <button onClick={() =>addToCart(props.id)}>Add to Cart +</button>

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
position:relative;
width: 85vw;
height: 500px;
    background-color: skyblue;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
`
