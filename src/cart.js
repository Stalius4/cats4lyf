import { useEffect, useState } from "react";
import styled from "styled-components"
import { faker } from '@faker-js/faker';
import Cats from "./Cats"
// import {randomCatArr} from "./App"

const Cart = (props) => {
    return (
        <>
        <p>Cat Wanted: {props.catImage}</p>
        <p>Cat Quantity: {props.catAmount}</p>
        <p>Cat Price: {props.catPrice}</p>
        </>
    )
}

export default Cart