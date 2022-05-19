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
      {props.basket.map((item, index)=>{
        return(
          <p key={index}>{item}</p>
        )
      })}
        </Items>
        <Button></Button>
    </Container>
    );
   };
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

`
export const Items = styled.div`
display:flex;
flex-direction: row;
background-color: aliceblue;
height: 70px;
border-bottom: 1px solid grey;
`

export const Button = styled.button`

`