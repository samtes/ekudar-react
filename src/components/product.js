import React, { Component }  from 'react';
import Currency from 'react-currency';

export function Product ({ product }) {
  return (
    <li>
      <div>
        <h3>{ product.name }</h3>
        <p>{ product.description }</p>
        <p>
          <Currency symbol='$' value={ product.price * 100 } />
        </p>
        <hr />
      </div>
    </li>
  )
}
