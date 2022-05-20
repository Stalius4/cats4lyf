import styled from 'styled-components';
import Cats from "./Cats";
import App from "./App";



const Cart = (props) => {
    return (
        <>
    <p>Total Quantity: {}</p>
    <p>Total Price: {}</p>
    <Container>
        <Wrapper>
            <NavbarItem flexGrow="3">Title</NavbarItem>
            <NavbarItem flexGrow="1">Quantity</NavbarItem>
            <NavbarItem flexGrow="1">Price</NavbarItem>
        </Wrapper>
        <p>CAT</p>
        <p>CAT AMOUNT</p>
        <p>CAT PRICE</p>
        <Items>
            {/* <p>Cat Wanted: {props.catImage}</p>
            <p>Cat Quantity: {props.catAmount}</p>
            <p>Cat Price: {props.catPrice}</p> */}
        {props.basket.map((item, index)=>{
        return(
        <>
        {/* <p key={index}>{item}</p> */}
        <img src={item} alt="cat" width="50px" height="50px" />
        </>
        )
        })}
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