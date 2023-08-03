// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// function Product() {
//   const { name } = useParams();
//   const [productData, setProductData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`/products/${name}.json`); // Replace with the correct file path
//         const text = await response.text();

//         const lines = text.split('\n');
//         const productInfo = lines.map((line) => {
//           const [original, translation] = line.split(/[-–]/).map((part) => part.trim());
//           return { original, translation };
//         });

//         setProductData(productInfo);
//       } catch (error) {
//         console.error('Error fetching product data:', error);
//       }
//     };

//     fetchData();
//   }, [name]);

//   return (
//     <div>
//       <h2>{name}</h2>
//       <div>
//         {productData.map((card, index) => (
//           <div key={index} className="card">
//             <div>{card.original}</div>
//             <div>{card.translation}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Product;









// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// function Product() {
//   const { name } = useParams();
//   const [productData, setProductData] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`/products/${name}.json`); // Replace with the correct file path
//         const jsonData = await response.json();

//         setProductData(jsonData.text);
//       } catch (error) {
//         console.error('Error fetching product data:', error);
//       }
//     };

//     fetchData();
//   }, [name]);

//   const handlePlayGame = () => {
//     navigate('/snake'); // Replace '/snake' with the correct path to the snake.js page
//   };

//   return (
//     <div className="bg-gray-100 py-8 px-4">
//       <h2 className="text-2xl mb-4">{name}</h2>
//       <button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         onClick={handlePlayGame}
//       >
//         Play Game
//       </button>
//       <div className="max-w-screen-lg mx-auto grid gap-4">
//         {productData.map((line, index) => (
//           <div key={index} className="bg-white p-4 shadow rounded">
//             <div className="font-semibold text-lg mb-2">{line.split(/[-–]/)[0]}</div>
//             <div className="text-gray-600">{line.split(/[-–]/)[1]}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Product;



import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
//import Snake from './Snake';

function Product() {
  const { name } = useParams();
  const [productData, setProductData] = useState([]);
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/products/${name}.json`); // Replace with the correct file path
        const jsonData = await response.json();

        setCards(jsonData.text);
        setProductData(jsonData.text);
        console.log(cards);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, [name]);

  const handleDeleteCard = (cardIndex) => {
    setProductData((prevProductData) => {
      const updatedProductData = [...prevProductData];
      updatedProductData.splice(cardIndex, 1);
      return updatedProductData;
    });
  };

  const handlePlayGame = () => {
    navigate('/snake', { state: { cards } }); // Replace '/snake' with the correct path to the snake.js page
  };

  return (
    <div className="bg-gray-100 py-8 px-4">
    <div className="text-center mb-20 mt-6">
      <h2 className="text-2xl mb-6">{name}</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handlePlayGame}
      >
        Play Game
      </button>
      </div>
      <div className="max-w-screen-lg mx-auto grid gap-4">
        {productData.map((line, index) => (
          <div key={index} className="bg-white p-4 shadow rounded">
            <div className="font-semibold text-lg mb-2">{line.split(/[-–]/)[0]}</div>
            {window.location.pathname.startsWith('/mycards') && ( // Check if the current path starts with '/mycards'
        <button
        className="text-gray-500 hover:text-red-700 font-bold absolute right-1/4 flex"
        onClick={() => handleDeleteCard(index)} // Call the handleDeleteCard function with the card index
        >
        X
        </button>
        )}
            <div className="text-gray-600">{line.split(/[-–]/)[1]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;