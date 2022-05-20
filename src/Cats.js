import { useEffect, useState } from "react";
import styled from "styled-components"
import { faker } from '@faker-js/faker';


const Cats = (props) => {
  

    
    return (
      <>
      <Container>
      {props.id.map((cat, index) => {
        return (<CatInfo key={index} image={cat} catInfo={props.catInfo} setCatInfo={props.setCatInfo}
          basket={props.basket} setBasket={props.setBasket} id={index} cartTotalPrice = {props.cartTotalPrice} setCartTotalPrice = {props.setCartTotalPrice} cartTotalQuantity = {props.cartTotalQuantity} setCartTotalQuantity = {props.setCartTotalQuantity}></CatInfo>

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

 

  const addToCart = (totalPricePerCat, inputAmount) => {
    if (inputAmount > 0){
      // Cart items in array
      let catBasket =[...props.basket];
      catBasket.push([props.image.url, randName, inputAmount, totalPricePerCat]) // image, name, quantity, price
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
    <div >
      {}
    <CatContainer>
    <CatImage src = {props.image.url} alt="cat" />
    <Name>{randName}</Name>
   <div>Price: £{randNum}</div>
    
    
    <TotalAndInput>
    <Input  placeholder="0"  type="number" min="0"  onChange={changeHandler}/>
    <Total>Total: £{randNum *inputAmount }</Total>{/* // placeholder value */}
    
    </TotalAndInput>
    <AddCard onClick={() =>addToCart((randNum * inputAmount), inputAmount)}>Add to Cart </AddCard>

    </CatContainer>
</div>
  )
}


export default Cats

const CatContainer  = styled.div`
border-radius:10px;
width: 200px;
height: 325px;
align-items:center;
display: flex;
flex-direction: column;
justify-content: stretch;
background-color: whitesmoke;
margin: 35px 35px;
gap: 7px;
box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;

`
const Total= styled.div`
font-size:20px;`
const CatImage = styled.img`
width:200px;
max-height: 179px;
height: 160px;
border-radius: 10px 10px 0px 0px;
border-bottom: solid orange 2px;

`

const Name = styled.div`
font-family: 'Akshar', sans-serif;
font-size: 25px;
`

 const AddCard = styled.button`
  margin: 10px;
  width: 180px;
  padding: 10px 0px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;
  border: 0px;
  font-weight: 700;
  box-shadow: 0px 0px 14px -7px #f09819;
  background-image: linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  font-size: 15px;


&:hover {
  background-position: right center;
 
  color: #fff;
  text-decoration: none;
}

&:active {
  transform: scale(0.95);
}
 `
const TotalAndInput =styled.div`
display: flex;
font-family: 'Akshar', sans-serif;
justify-content:stretch;


`

const Input= styled.input`
width:40px;


`

const Container = styled.div`
position:relative;
width: 85vw;
height: 500px;
margin:85px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
gap: 15px;

`
