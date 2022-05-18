import { useEffect, useState } from "react";
import styled from "styled-components"
import { faker } from '@faker-js/faker';
import Cats from "./Cats"
// import {randomCatArr} from "./App"

const Cart = (props) => {
    return (
        <>
        <p>Quantity: {props.amount}</p>
        </>
    )
}

export default Cart