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
            <p>Total Quantity: {props.cartTotalQuantity}</p>
            <p>Total Price: £{props.cartTotalPrice}</p>
            <Container>
                <Wrapper>
                    <NavbarItem flexGrow="3">Title</NavbarItem>
                    <NavbarItem flexGrow="1">Quantity</NavbarItem>
                    <NavbarItem flexGrow="1">Price</NavbarItem>
                </Wrapper>
                <Items>
                {props.basket.map((item, index)=>{
                return(
                    <ShoppingBag key={index}>
                    <Image src={item[0]} />
                    <h1>{item[1]}</h1>                     
                    <h1>{item[2]}</h1> {/* input Amount */}
                    <h1>{item[3]}</h1> {/* total price per cat  */}
                    <button onClick={()=>{deleteCatHandler(index, item[2], item[3])}}>Delete</button>
                    </ShoppingBag>
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
    height: fit-content;
    display:flex;
    flex-direction: row;
    background-color: aliceblue;
    height: 85px;
    border-bottom: 1px solid grey;
`

export const ShoppingBag = styled.div`
    display: flex;
`
export const Image = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
`
