import React from 'react';

export default function Header(props) {
    return (
        <header className="row block center">
            <div>
                <a href="#/">
                    <h1>Basket</h1>
                </a>
            </div>
            <div>
                <a href="#/cart">Cart</a> <a href="#/signin">signin</a>
            </div>
        </header>
    )
}