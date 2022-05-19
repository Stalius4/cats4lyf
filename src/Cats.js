import { useEffect, useState } from "react";
import styled from "styled-components"
import { faker } from '@faker-js/faker';
import Cart from "./Cart"
let cartAmount = null




const Cats = (props) => {
  

    
    return (
      <>
      {/* <p>{cartState.cat}</p> */}



      <Container>
      {props.id.map((cat, index) => {

        return (<CatInfo index={index} name={cat} id={index}></CatInfo>)

      })}
      </Container>
    </>
    )

}

const CatInfo =(props) =>{
  const [inputAmount, setInputAmount] = useState("")
  // const addToCart = (amountWanted, catWanted) => {
  //   cartAmount = amountWanted
  // }
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

  const [cartState, setCartState] = ([{
    "cat" : "image_source",
    "amount": 0,
    "price" : 0,
  }])
  // const [cartCat, setCartCat] = useState([])
  // const [cartAmount, setCartAmount] = useState([])
  // const [cartPrice, setCartPrice] = ([])
  
  const [basket , setBasket] = useState([])
  const addToCart = (index, inputAmount, catImage, pricePerCat) => {
    if(index ===0){
      console.log("hello")
    }
    let storedCatInfo = [...basket];
    storedCatInfo.push(index);
    // storedCatInfo.push(props.name.url, randName, inputAmount, randNum);
    setBasket(storedCatInfo);
    console.log(storedCatInfo)


    // let newCartState = [...cartState];
    // let newCartAmount = [...cartAmount];
    // let newCartCat = [...cartCat];
    // let newCartPrice = [...cartPrice];
    // newCartState[index].cat = catImage;
    // newCartState[index].amount = inputAmount;
    // newCartState[index].price = pricePerCat;
    // // newCartState[index].amount(inputAmount);
    // setCartState(newCartState)


    // setInputText("")
  };
  // const removeHandler = (index) => {
  //   let newtoDoArray = [...toDos];
  //   newtoDoArray.splice(index, 1);
  //   setToDos(newtoDoArray)
  // };

  return(
    <div key={props.index}>
      
    {/* <AddToCart basket = {basket} cartState = {cartState} key = {props.index} cartCat = {cartCat} cartAmount = {cartAmount} cartPrice = {cartPrice}/> */}
    <CatContainer>
    <img src = {props.name.url} alt="cat" width="160px" height="160px"/>
    <p>{randName}</p>
    <p>COST: £{randNum}</p>
    <p>Total: £{inputAmount <= 0  ? 0 : randNum *inputAmount }</p>{/* // placeholder value */}
    <p>{inputAmount <= 0 ? 0 : inputAmount}</p>

    <input type="number" value={inputAmount <= 0 ? 0 : inputAmount} onChange={changeHandler}/>
    <button onClick={() => addToCart(props.index, inputAmount, props.name.url, (randNum * inputAmount))}>Add to Cart +</button>
    
    
    {/* <p>{props.name.description}</p> */}
    </CatContainer>
</div>
  )
}

const AddToCart = (props) => {
    let cartArr = [{}]
    let cartItem = {
        "cat" : props.cartCat,
        "amount": props.cartAmount,
        "price" : props.cartPrice
      }
    return (
      <>
        <div key = {props.key}>
          {/* <p><img src = {props.basket} alt="cat" width="16px" height="16px"/></p> */}
          {/* <p>{props.cartState}</p> */}
          {/* <p>{cartItem.cat}</p> */}
          <p>{props.cartCat}</p>
          <p>{props.cartAmount}</p>
          <p>{props.cartPrice}</p>
        </div>

      
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
