import React, { Component }  from 'react';

import { Product } from './product.js';

export default class ProductsList extends Component {
  render () {
    const products = [
      {
        id: 1,
        name: 'Foo',
        description: 'This is the description of foo product',
        price: 200
      },
      {
        id: 2,
        name: 'Bar',
        description: 'This is the description of bar product',
        price: 350
      },
      {
        id: 3,
        name: 'Zoo',
        description: 'This is the description of zoo product',
        price: 175
      }
    ];

    const productList = products.map(product => {
      return (
        <Product key={ product.id } product={ product } />
      );
    });

    return (
      <div>
        <h2>Products list</h2>
        <ul>
          { productList }
        </ul>
      </div>
    )
  }
}
