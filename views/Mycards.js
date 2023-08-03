import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard2 from './ProductCard2';
import product1Flag from './finnish.png';

function Mycards() {
  const location = useLocation();
  const product = location.state?.product;

  const [products, setProducts] = useState(() => {
    //localStorage.removeItem('myCards');
    const storedProducts = localStorage.getItem('myCards');
    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  useEffect(() => {
    if (product) {
      const isProductAdded = products.some((p) => p.name === product.name);
      if (!isProductAdded) {
        const updatedProducts = [...products, product];
        setProducts(updatedProducts);
        localStorage.setItem('myCards', JSON.stringify(updatedProducts));
      }
    }
  }, [product, products]);

  return (
    <div>
      <div className="text-center mb-20 mt-6">
        <h1 className="font-bold text-2xl mb-6">My Cards</h1>
        <p>This is the my cards page content.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 padding:2rem">
        {products.map((product, index) => (
          <ProductCard2
            key={index}
            name={product.name}
            flag={product.flag}
            cardCount={product.cardCount}
          />
        ))}
      </div>
    </div>
  );
}

export default Mycards;

