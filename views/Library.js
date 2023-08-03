import React, { useEffect,  useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import product1Flag from './german.png';
import product2Flag from './japanese.png';
import product3Flag from './finnish.png'

import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth();

  


function Library() {
  // Assuming you have an array of product data

  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsSignedIn(!!user);
      console.log('User is signed in:', !!user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const products = [
    {
      name: 'Product1',
      flag: product1Flag,
      cardCount: 50,
    },
    {
      name: 'Product2',
      flag: product2Flag,
      cardCount: 75,
    },
    {
      name: 'German words A2+B1',
      flag: product1Flag,
      cardCount: 20,
      },
      {
        name: 'Japanese adjectives N5 level',
        flag: product2Flag,
        cardCount: 8,
        },
      {
        name: 'Japanese time expressions',
        flag: product2Flag,
        cardCount: 17,
        },
     {
        name: 'Japanese verbs N5 level',
        flag: product2Flag,
        cardCount: 24,
        },
    {
        name: 'Finnish book words',
        flag: product3Flag,
        cardCount: 40,
        },
    {
        name: 'Product3',
        flag: product3Flag,
        cardCount: 35,
          },   
    
    // Add more product objects as needed
  ];

  return (
    <div>
    <div className="text-center mb-20 mt-6">
    <h1 className="font-bold text-2xl mb-6">Library</h1>
            <p>
                This is the library page content.
            </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 padding:2rem">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          flag={product.flag}
          cardCount={product.cardCount}
        >
        {isSignedIn && (
            <Link to="/mycards" state={{ product: product }}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{ backgroundColor: '#0000ff !important' }}>
                Add to My Cards
                </button>
              </Link>
            )}
        </ProductCard>    
      ))}
    </div>
    </div>
  );
}

export default Library;
