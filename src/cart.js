import styled from 'styled-components';
// import Cats from "./Cats";
// import App from "./App";



const Cart = (props) => {
    const deleteCatHandler = (index, inputAmount, totalPricePerCat) => {
        let newBasket = [...props.basket];
        newBasket.splice(index, 1);
        props.setBasket(newBasket);

        let currentTotalPrice = props.cartTotalPrice;
        props.setCartTotalPrice(Number(currentTotalPrice -= totalPricePerCat));
        let currentTotalAmount = Number(props.cartTotalQuantity);
        props.setCartTotalQuantity(currentTotalAmount -= Number(inputAmount))
    };
    return (
        <>  

            <Container>
                <Wrapper>
                    <NavbarItem flexGrow="3">Name</NavbarItem>
                    <NavbarItem flexGrow="1">Quantity</NavbarItem>
                    <NavbarItem flexGrow="3">Price</NavbarItem>
                </Wrapper>
                <Items>
                {props.basket.map((item, index)=>{
                return(
                    <ShoppingBag key={index}>
                    
                    <ImageName><Image src={item[0]} />{item[1]}</ImageName>                     
                    <Quantity>{item[2]}</Quantity> {/* input Amount */}
                    <Price>£{item[3]}</Price> {/* total price per cat  */}
                    <Delete onClick={()=>{deleteCatHandler(index, item[2], item[3])}}>Delete</Delete>
                    </ShoppingBag>
                )
                })}
               
                 <Total>
             <Quantity>Total Quantity: {props.cartTotalQuantity}</Quantity>
            <Price>Total Price: £{props.cartTotalPrice}</Price>
            </Total>
            </Items>
            </Container>
        </>
    )
}

export default Cart

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: grey;
    padding: 10px;
`;
export const NavbarItem = styled.div`
    font-weight: 700;
    font-size: 16px;
    margin-right: 16px;
    color: black;
    flex-grow:${(props) => props.flexGrow};
`;
export const Container = styled.div`
width: 35vw;
margin-top: 125px;

`
export const Items = styled.div`
    height: fit-content;
    display:flex;
    flex-direction: column;
   
    height: 85px;

`

export const ShoppingBag = styled.div`
justify-content:space-between;
    display: flex;
    align-items:center;
    font-family: 'Akshar', sans-serif;
font-size: 25px;
border-bottom: black 1px solid;
`
export const Image = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
    margin-right: 25px;
`
export const Quantity = styled.div`
    font-family: 'Akshar', sans-serif;
font-size: 25px;
`
export const Price = styled.div`
    font-family: 'Akshar', sans-serif;
font-size: 25px;

`
const Delete = styled.button`
  margin: 10px;
  width: 80px;
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

 const ImageName = styled.div`
 display: flex;
 align-items:center;
 `
  const Total = styled.div`
  display: flex;
  flex-direction: column;
  align-items:flex-end
  `
  



