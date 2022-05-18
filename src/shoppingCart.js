import React from 'react';
import ReactDOM from 'react-dom/client';
import './shoppingCart.css';
import App from './App';
import Basket from './shopping-Cart-components/Basket';
import Header from './shopping-Cart-components/Header';
import Main from './shopping-Cart-components/Main';
import shoppingCartData from './shoppingCart-data';
import reportWebVitals from './reportWebVitals';

function shoppingCart() {
    const {products} = shoppingCartData;
    return (
        <div className="shoppingCart">
            <Header></Header>
            <div className='row'>
                <Main> products = {products} </Main>
                <Basket></Basket>
            </div>
        </div> 
            
    )
}


export default App;