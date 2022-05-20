import styled from 'styled-components';
import Cats from "./Cats";
import App from "./App";



const Cart = (props) => {

    return (
    <Container>
        <Wrapper>
          <NavbarItem flexGrow="3">Title</NavbarItem>
          <NavbarItem flexGrow="1">Quantity</NavbarItem>
          <NavbarItem flexGrow="1">Price</NavbarItem>
        </Wrapper>
        <Items>
     {   props.basket.map((item, index)=>{
    return(<ShoppingBag key={index}>
      <Image  src={item[0]} /> 
      <CartItem flexGrow="3">{item[1]}</CartItem>
      <CartItem flexGrow="1">{item[2]}</CartItem>
      <CartItem flexGrow="1">{item[3]}</CartItem>
      </ShoppingBag>
    )
  })}
    
 
        </Items>
     
    </Container>
    );
   };
   export default Cart

   export const Wrapper = styled.div`
   position: relative;
 display: flex;
 max-width: 80vw;
 align-items: center;
 background-color: grey;
 padding: 10px;
 padding-left: 80px;
`;
export const NavbarItem = styled.div`
font-weight: 700;
 font-size: 16px;
 margin-right: 16px;
 color: black;
 flex-grow:${(props) => props.flexGrow};
`;
export const Container = styled.div`
position: relative;

`
export const Items = styled.div`
height: fit-content;
display:flex;
flex-direction: column;
background-color: aliceblue;
height: 85px;
border-bottom: 1px solid grey;
`

export const ShoppingBag = styled.div`
display: flex;
background-color: yellow;
width: 80vw;
max-width: 80vw;
`
export const Image = styled.img`
height: 80px;
width: 80px;
border-radius: 50%;
`
export const CartItem = styled.div`
flex-grow:${(props) => props.flexGrow}
`