import React from 'react';
import { Link } from "react-router-dom"



function ProductCard({ name, flag, cardCount, children }) {
    return (
      <div className="flex flex-col items-center p-4 border border-gray-300 rounded-md m-2">
        <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-2">
          <img src={flag} alt="Flag" className="w-10" />
        </div>
        <Link to={`/Library/${name}`} className="font-bold mb-1">
          {name}
        </Link>
        <div className="text-gray-500">{cardCount} cards</div>
        {children}
      </div>
    );
  }

export default ProductCard;