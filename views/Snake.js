// import React, { useEffect, useRef, useState } from 'react';

// const Snake = () => {
//   const canvasRef = useRef(null);
//   const snakeSize = 20;
//   const canvasWidth = 400;
//   const canvasHeight = 400;

//   const generateRandomPosition = () => {
//     const x = Math.floor(Math.random() * (canvasWidth / snakeSize)) * snakeSize;
//     const y = Math.floor(Math.random() * (canvasHeight / snakeSize)) * snakeSize;
//     return { x, y };
//   };

//   const [snake, setSnake] = useState([{ x: 50, y: 50 }]);
//   const [direction, setDirection] = useState('RIGHT');
//   const [apple, setApple] = useState(generateRandomPosition());

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');

//     const moveSnake = () => {
//       const head = { ...snake[0] };

//       switch (direction) {
//         case 'RIGHT':
//           head.x += 10;
//           break;
//         case 'LEFT':
//           head.x -= 10;
//           break;
//         case 'UP':
//           head.y -= 10;
//           break;
//         case 'DOWN':
//           head.y += 10;
//           break;
//         default:
//           break;
//       }

//       const newSnake = [head, ...snake];
//       if (head.x === apple.x && head.y === apple.y) {
//         setApple(generateRandomPosition());
//       } else {
//         newSnake.pop();
//       }

//       setSnake(newSnake);
//     };

//     const handleKeyDown = (event) => {
//       const newDirection = getNewDirection(event.keyCode);
//       if (newDirection) {
//         setDirection(newDirection);
//       }
//     };

//     const getNewDirection = (keyCode) => {
//       switch (keyCode) {
//         case 37: // Left arrow key
//           return 'LEFT';
//         case 38: // Up arrow key
//           return 'UP';
//         case 39: // Right arrow key
//           return 'RIGHT';
//         case 40: // Down arrow key
//           return 'DOWN';
//         default:
//           return null;
//       }
//     };

//     const drawSnake = () => {
//       context.clearRect(0, 0, canvasWidth, canvasHeight);

//       snake.forEach((segment) => {
//         context.fillStyle = 'black';
//         context.fillRect(segment.x, segment.y, snakeSize, snakeSize);
//       });

//       context.fillStyle = 'red';
//       context.fillRect(apple.x, apple.y, snakeSize, snakeSize);
//     };

//     const gameLoop = () => {
//       moveSnake();
//       drawSnake();
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     const interval = setInterval(gameLoop, 200);

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//       clearInterval(interval);
//     };
//   }, [snake, direction, apple]);

//   return <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} className="border-2"/>;
// };

// export default Snake;













// import React, { useEffect, useRef, useState } from 'react';
// import snakeHead from './head1.png';
// import snakeBody from './body.png';

// const Snake = () => {
//   const canvasRef = useRef(null);
//   const snakeSize = 40;
//   const canvasWidth = 800;
//   const canvasHeight = 800;

//   const generateRandomPosition = () => {
//     const x = Math.floor(Math.random() * (canvasWidth / snakeSize)) * snakeSize;
//     const y = Math.floor(Math.random() * (canvasHeight / snakeSize)) * snakeSize;
//     return { x, y };
//   };

//   const [snake, setSnake] = useState([{ x: 50, y: 50 }]);
//   const [direction, setDirection] = useState('RIGHT');
//   const [apple, setApple] = useState(generateRandomPosition());

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');
//     const headImage = new Image();
//     const bodyImage = new Image();

//     headImage.src = snakeHead;
//     bodyImage.src = snakeBody;

//     const moveSnake = () => {
//       const head = { ...snake[0] };

//       switch (direction) {
//         case 'RIGHT':
//           head.x += 10;
//           break;
//         case 'LEFT':
//           head.x -= 10;
//           break;
//         case 'UP':
//           head.y -= 10;
//           break;
//         case 'DOWN':
//           head.y += 10;
//           break;
//         default:
//           break;
//       }

//       const newSnake = [head, ...snake]; // snake.slice(0, -1)
//       if (head.x === apple.x && head.y === apple.y) {
//         setApple(generateRandomPosition());
//       } else {
//         newSnake.pop();
//       }

//       setSnake(newSnake);
//     };

//     const handleKeyDown = (event) => {
//       const newDirection = getNewDirection(event.keyCode);
//       if (newDirection) {
//         setDirection(newDirection);
//       }
//     };

//     const getNewDirection = (keyCode) => {
//       switch (keyCode) {
//         case 37: // Left arrow key
//           return 'LEFT';
//         case 38: // Up arrow key
//           return 'UP';
//         case 39: // Right arrow key
//           return 'RIGHT';
//         case 40: // Down arrow key
//           return 'DOWN';
//         default:
//           return null;
//       }
//     };

//     const drawSnake = () => {
//       context.clearRect(0, 0, canvasWidth, canvasHeight);

//       snake.forEach((segment, index) => {
//         const image = index === 0 ? headImage : bodyImage;
//         context.drawImage(image, segment.x, segment.y, snakeSize, snakeSize);
//       });

//       context.fillStyle = 'red';
//       context.fillRect(apple.x, apple.y, snakeSize, snakeSize);
//     };

//     const gameLoop = () => {
//       moveSnake();
//       drawSnake();
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     const interval = setInterval(gameLoop, 200);

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//       clearInterval(interval);
//     };
//   }, [snake, direction, apple]);

//   return <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} className="border-2" />;
// };

// export default Snake;










// import React, { useEffect, useRef, useState } from 'react';
// import snakeHead from './head1.png';
// import snakeBody from './body3.png';

// const Snake = () => {
//   const canvasRef = useRef(null);
//   const snakeSize = 40;
//   const canvasWidth = 800;
//   const canvasHeight = 800;
//   const appleTolerance = 10;

//   const generateRandomPosition = () => {
//     const x = Math.floor(Math.random() * (canvasWidth / snakeSize)) * snakeSize;
//     const y = Math.floor(Math.random() * (canvasHeight / snakeSize)) * snakeSize;
//     return { x, y };
//   };

//   const [snake, setSnake] = useState([{ x: 50, y: 50 }]);
//   const [direction, setDirection] = useState('RIGHT');
//   const [apple, setApple] = useState(generateRandomPosition());

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');
//     const headImage = new Image();
//     const bodyImage = new Image();

//     headImage.src = snakeHead;
//     bodyImage.src = snakeBody;

//     const moveSnake = () => {
//       const head = { ...snake[0] };

//       switch (direction) {
//         case 'RIGHT':
//           head.x += snakeSize;
//           break;
//         case 'LEFT':
//           head.x -= snakeSize;
//           break;
//         case 'UP':
//           head.y -= snakeSize;
//           break;
//         case 'DOWN':
//           head.y += snakeSize;
//           break;
//         default:
//           break;
//       }

//       const newSnake = [head, ...snake];
//       if (isAppleEaten(head)) {
//         setApple(generateRandomPosition());
//       } else {
//         // Remove the last segment only if the snake did not eat the apple
//         newSnake.pop();
//       }

//       setSnake(newSnake);
//     };

//     const isAppleEaten = (head) => {
//         // Check if the head's position is within the tolerance range of the apple's position
//         return (
//           Math.abs(head.x - apple.x) <= appleTolerance &&
//           Math.abs(head.y - apple.y) <= appleTolerance
//         );
//       };

//     const handleKeyDown = (event) => {
//       const newDirection = getNewDirection(event.keyCode);
//       if (newDirection) {
//         setDirection(newDirection);
//       }
//     };

//     const getNewDirection = (keyCode) => {
//       switch (keyCode) {
//         case 37: // Left arrow key
//           return 'LEFT';
//         case 38: // Up arrow key
//           return 'UP';
//         case 39: // Right arrow key
//           return 'RIGHT';
//         case 40: // Down arrow key
//           return 'DOWN';
//         default:
//           return null;
//       }
//     };

//     const drawSnake = () => {
//       context.clearRect(0, 0, canvasWidth, canvasHeight);

//       snake.forEach((segment, index) => {
//         const image = index === 0 ? headImage : bodyImage;
//         context.drawImage(image, segment.x, segment.y, snakeSize, snakeSize);
//       });

//       context.fillStyle = 'red';
//       context.fillRect(apple.x, apple.y, snakeSize, snakeSize);
//     };

//     const gameLoop = () => {
//       moveSnake();
//       drawSnake();
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     const interval = setInterval(gameLoop, 200);

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//       clearInterval(interval);
//     };
//   }, [snake, direction, apple]);

//   return <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} className="border-2 bg-sky-500/50" />;
// };

// export default Snake;












// import React, { useEffect, useRef, useState } from 'react';
// import snakeHeadUp from './snakeHeadUp.png';
// import snakeHeadDown from './snakeHeadDown.png';
// import snakeHeadLeft from './snakeHeadLeft.png';
// import snakeHeadRight from './snakeHeadRight.png';
// import snakeBodyUp from './snakeBodyUp.png';
// import snakeBodyDown from './snakeBodyDown.png';
// import snakeBodyLeft from './snakeBodyLeft.png';
// import snakeBodyRight from './snakeBodyRight.png';

// const Snake = () => {
//   const canvasRef = useRef(null);
//   const snakeSize = 40;
//   const canvasWidth = 800;
//   const canvasHeight = 800;
//   const appleTolerance = 10;

//   const generateRandomPosition = () => {
//     const x = Math.floor(Math.random() * (canvasWidth / snakeSize)) * snakeSize;
//     const y = Math.floor(Math.random() * (canvasHeight / snakeSize)) * snakeSize;
//     return { x, y };
//   };

//   const [snake, setSnake] = useState([{ x: 50, y: 50 }]);
//   const [direction, setDirection] = useState('RIGHT');
//   const [apple, setApple] = useState(generateRandomPosition());

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');

//     const headImages = {
//       UP: new Image(),
//       DOWN: new Image(),
//       LEFT: new Image(),
//       RIGHT: new Image(),
//     };
//     const bodyImages = {
//       UP: new Image(),
//       DOWN: new Image(),
//       LEFT: new Image(),
//       RIGHT: new Image(),
//     };

//     headImages.UP.src = snakeHeadUp;
//     headImages.DOWN.src = snakeHeadDown;
//     headImages.LEFT.src = snakeHeadLeft;
//     headImages.RIGHT.src = snakeHeadRight;

//     bodyImages.UP.src = snakeBodyUp;
//     bodyImages.DOWN.src = snakeBodyDown;
//     bodyImages.LEFT.src = snakeBodyLeft;
//     bodyImages.RIGHT.src = snakeBodyRight;

//     const moveSnake = () => {
//       const head = { ...snake[0] };

//       switch (direction) {
//         case 'RIGHT':
//           head.x += snakeSize;
//           break;
//         case 'LEFT':
//           head.x -= snakeSize;
//           break;
//         case 'UP':
//           head.y -= snakeSize;
//           break;
//         case 'DOWN':
//           head.y += snakeSize;
//           break;
//         default:
//           break;
//       }

//       if (isAppleEaten(head)) {
//         setApple(generateRandomPosition());
//         setSnake((prevSnake) => [head, ...prevSnake]);
//       } else {
//         const newSnake = [head, ...snake.slice(0, snake.length - 1)];
//         setSnake(newSnake);
//       }
//     };

//     const isAppleEaten = (head) => {
//       return (
//         Math.abs(head.x - apple.x) <= appleTolerance &&
//         Math.abs(head.y - apple.y) <= appleTolerance
//       );
//     };

//     const handleKeyDown = (event) => {
//       const newDirection = getNewDirection(event.keyCode);
//       if (newDirection) {
//         setDirection(newDirection);
//       }
//     };

//     const getNewDirection = (keyCode) => {
//       switch (keyCode) {
//         case 37: // Left arrow key
//           return 'LEFT';
//         case 38: // Up arrow key
//           return 'UP';
//         case 39: // Right arrow key
//           return 'RIGHT';
//         case 40: // Down arrow key
//           return 'DOWN';
//         default:
//           return null;
//       }
//     };

//     const drawSnake = () => {
//       context.clearRect(0, 0, canvasWidth, canvasHeight);

//       snake.forEach((segment, index) => {
//         let image;
//         if (index === 0) {
//           // Head image
//           switch (direction) {
//             case 'UP':
//               image = headImages.UP;
//               break;
//             case 'DOWN':
//               image = headImages.DOWN;
//               break;
//             case 'LEFT':
//               image = headImages.LEFT;
//               break;
//             case 'RIGHT':
//               image = headImages.RIGHT;
//               break;
//             default:
//               break;
//           }
//         } else {
//           // Body image
//           switch (direction) {
//             case 'UP':
//               image = bodyImages.UP;
//               break;
//             case 'DOWN':
//               image = bodyImages.DOWN;
//               break;
//             case 'LEFT':
//               image = bodyImages.LEFT;
//               break;
//             case 'RIGHT':
//               image = bodyImages.RIGHT;
//               break;
//             default:
//               break;
//           }
//         }

//         context.drawImage(image, segment.x, segment.y, snakeSize, snakeSize);
//       });

//       context.fillStyle = 'red';
//       context.fillRect(apple.x, apple.y, snakeSize, snakeSize);
//     };

//     const gameLoop = () => {
//       moveSnake();
//       drawSnake();
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     const interval = setInterval(gameLoop, 200);

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//       clearInterval(interval);
//     };
//   }, [snake, direction, apple]);

//   return <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} className="border-2 bg-sky-500/50" />;
// };

// export default Snake;









// import React, { useEffect, useRef, useState } from 'react';
// import snakeHeadUp from './snakeHeadUp.png';
// import snakeHeadDown from './snakeHeadDown.png';
// import snakeHeadLeft from './snakeHeadLeft.png';
// import snakeHeadRight from './snakeHeadRight.png';
// import snakeBodyUp from './snakeBodyUp.png';
// import snakeBodyDown from './snakeBodyDown.png';
// import snakeBodyLeft from './snakeBodyLeft.png';
// import snakeBodyRight from './snakeBodyRight.png';
// import snakeTailUp from './snakeTailUp.png';
// import snakeTailDown from './snakeTailDown.png';
// import snakeTailLeft from './snakeTailLeft.png';
// import snakeTailRight from './snakeTailRight.png';

// const Snake = () => {
//   const canvasRef = useRef(null);
//   const snakeSize = 40;
//   const canvasWidth = 800;
//   const canvasHeight = 800;
//   const appleTolerance = 10;

//   const generateRandomPosition = () => {
//     const x = Math.floor(Math.random() * (canvasWidth / snakeSize)) * snakeSize;
//     const y = Math.floor(Math.random() * (canvasHeight / snakeSize)) * snakeSize;
//     return { x, y };
//   };

//   const [snake, setSnake] = useState([{ x: 50, y: 50, direction: 'RIGHT' }]);
//   const [direction, setDirection] = useState('RIGHT');
//   const [apple, setApple] = useState(generateRandomPosition());

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');

//     const headImages = {
//       UP: new Image(),
//       DOWN: new Image(),
//       LEFT: new Image(),
//       RIGHT: new Image(),
//     };
//     const bodyImages = {
//       UP: new Image(),
//       DOWN: new Image(),
//       LEFT: new Image(),
//       RIGHT: new Image(),
//     };

//     const tailImages = {
//         UP: new Image(),
//         DOWN: new Image(),
//         LEFT: new Image(),
//         RIGHT: new Image(),
//       };

//     headImages.UP.src = snakeHeadUp;
//     headImages.DOWN.src = snakeHeadDown;
//     headImages.LEFT.src = snakeHeadLeft;
//     headImages.RIGHT.src = snakeHeadRight;

//     bodyImages.UP.src = snakeBodyUp;
//     bodyImages.DOWN.src = snakeBodyDown;
//     bodyImages.LEFT.src = snakeBodyLeft;
//     bodyImages.RIGHT.src = snakeBodyRight;

//     tailImages.UP.src = snakeTailUp;
//     tailImages.DOWN.src = snakeTailDown;
//     tailImages.LEFT.src = snakeTailLeft;
//     tailImages.RIGHT.src = snakeTailRight;

//     const moveSnake = () => {
//       const head = { ...snake[0] };

//       switch (direction) {
//         case 'RIGHT':
//           head.x += snakeSize;
//           break;
//         case 'LEFT':
//           head.x -= snakeSize;
//           break;
//         case 'UP':
//           head.y -= snakeSize;
//           break;
//         case 'DOWN':
//           head.y += snakeSize;
//           break;
//         default:
//           break;
//       }

//       if (isAppleEaten(head)) {
//         setApple(generateRandomPosition());
//         setSnake((prevSnake) => [{ ...head, direction }, ...prevSnake]);
//       } else {
//         const newSnake = [{ ...head, direction }, ...snake.slice(0, snake.length - 1)];
//         setSnake(newSnake);
//       }
//     };

//     const isAppleEaten = (head) => {
//       return (
//         Math.abs(head.x - apple.x) <= appleTolerance &&
//         Math.abs(head.y - apple.y) <= appleTolerance
//       );
//     };

//     const handleKeyDown = (event) => {
//       const newDirection = getNewDirection(event.keyCode);
//       if (newDirection) {
//         setDirection(newDirection);
//       }
//     };

//     const getNewDirection = (keyCode) => {
//       switch (keyCode) {
//         case 37: // Left arrow key
//           return 'LEFT';
//         case 38: // Up arrow key
//           return 'UP';
//         case 39: // Right arrow key
//           return 'RIGHT';
//         case 40: // Down arrow key
//           return 'DOWN';
//         default:
//           return null;
//       }
//     };

//     const drawSnake = () => {
//       context.clearRect(0, 0, canvasWidth, canvasHeight);

//       snake.forEach((segment, index) => {
//         let image;
//         if (index === 0) {
//           // Head image
//           switch (segment.direction) {
//             case 'UP':
//               image = headImages.UP;
//               break;
//             case 'DOWN':
//               image = headImages.DOWN;
//               break;
//             case 'LEFT':
//               image = headImages.LEFT;
//               break;
//             case 'RIGHT':
//               image = headImages.RIGHT;
//               break;
//             default:
//               break;
//           }
//         } else if (index === snake.length - 1) {
//             // Tail image
//             const prevSegment = snake[index - 1];
//             let tailDirection = prevSegment.direction;
      
//             if (prevSegment.x === segment.x) {
//               // Vertical tail segment
//               if (prevSegment.y < segment.y) {
//                 tailDirection = 'UP';
//               } else if (prevSegment.y > segment.y) {
//                 tailDirection = 'DOWN';
//               }
//             } else if (prevSegment.y === segment.y) {
//               // Horizontal tail segment
//               if (prevSegment.x < segment.x) {
//                 tailDirection = 'LEFT';
//               } else if (prevSegment.x > segment.x) {
//                 tailDirection = 'RIGHT';
//               }
//             }
      
//             switch (tailDirection) {
//               case 'UP':
//                 image = tailImages.UP;
//                 break;
//               case 'DOWN':
//                 image = tailImages.DOWN;
//                 break;
//               case 'LEFT':
//                 image = tailImages.LEFT;
//                 break;
//               case 'RIGHT':
//                 image = tailImages.RIGHT;
//                 break;
//               default:
//                 break;
//             }  
//         } else {
//           // Body image
//           const prevSegment = snake[index - 1];
//           let prevDirection = prevSegment.direction;
//           let nextSegment = snake[index + 1];

//           if (!nextSegment) {
//             // If the current segment is the last segment
//             nextSegment = segment;
//           }

//           if (prevSegment.x === nextSegment.x) {
//             // Vertical body segment
//             if (prevSegment.y < nextSegment.y) {
//               prevDirection = 'DOWN';
//             } else if (prevSegment.y > nextSegment.y) {
//               prevDirection = 'UP';
//             }
//           } else if (prevSegment.y === nextSegment.y) {
//             // Horizontal body segment
//             if (prevSegment.x < nextSegment.x) {
//               prevDirection = 'RIGHT';
//             } else if (prevSegment.x > nextSegment.x) {
//               prevDirection = 'LEFT';
//             }
//           }

//           switch (prevDirection) {
//             case 'UP':
//               image = bodyImages.UP;
//               break;
//             case 'DOWN':
//               image = bodyImages.DOWN;
//               break;
//             case 'LEFT':
//               image = bodyImages.LEFT;
//               break;
//             case 'RIGHT':
//               image = bodyImages.RIGHT;
//               break;
//             default:
//               break;
//           }
//         }

//         context.drawImage(image, segment.x, segment.y, snakeSize, snakeSize);
//       });

//       context.fillStyle = 'red';
//       context.fillRect(apple.x, apple.y, snakeSize, snakeSize);
//     };

//     const gameLoop = () => {
//       moveSnake();
//       drawSnake();
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     const interval = setInterval(gameLoop, 200);

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//       clearInterval(interval);
//     };
//   }, [snake, direction, apple]);

//   return <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} className="border-2 bg-sky-500/50" />;
// };

// export default Snake;


// import React, { useState, useEffect, useRef } from 'react';
// import { useLocation } from 'react-router-dom';
// import snakeHeadUp from './snakeHeadUp.png';
// import snakeHeadDown from './snakeHeadDown.png';
// import snakeHeadLeft from './snakeHeadLeft.png';
// import snakeHeadRight from './snakeHeadRight.png';
// import snakeBodyUp from './snakeBodyUp.png';
// import snakeBodyDown from './snakeBodyDown.png';
// import snakeBodyLeft from './snakeBodyLeft.png';
// import snakeBodyRight from './snakeBodyRight.png';
// import snakeTailUp from './snakeTailUp.png';
// import snakeTailDown from './snakeTailDown.png';
// import snakeTailLeft from './snakeTailLeft.png';
// import snakeTailRight from './snakeTailRight.png';

// const Snake = () => {
//   const location = useLocation();
//   const cards = location.state.cards;  
//   const canvasRef = useRef(null);
//   const [snake, setSnake] = useState([{ x: 50, y: 50, direction: 'RIGHT' }]);
//   const [direction, setDirection] = useState('RIGHT');
//   const [currentCard, setCurrentCard] = useState(null);
//   const [collectedCards, setCollectedCards] = useState([]);
//   const [barriers, setBarriers] = useState([]);

//   const canvasWidth = 400;
//   const canvasHeight = 400;
//   const snakeSize = 20;
//   const appleTolerance = 10;

//   const generateApple = () => {
//     const x = Math.floor(Math.random() * (canvasWidth / snakeSize)) * snakeSize;
//     const y = Math.floor(Math.random() * (canvasHeight / snakeSize)) * snakeSize;
//     return { x, y };
//   };

//   const [apple, setApple] = useState(generateApple());

//   const formatted = cards.map((card) => {
//     const [word, translation] = card.split(/[-–]/);
//     return { word, translation };
//   });
//   console.log(formatted)

  

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');
    

//     const moveSnake = () => {
//               const head = { ...snake[0] };
        
//               switch (direction) {
//                 case 'RIGHT':
//                   head.x += snakeSize;
//                   break;
//                 case 'LEFT':
//                   head.x -= snakeSize;
//                   break;
//                 case 'UP':
//                   head.y -= snakeSize;
//                   break;
//                 case 'DOWN':
//                   head.y += snakeSize;
//                   break;
//                 default:
//                   break;
//               }
        
//               if (isAppleEaten(head)) {
//                 setApple(generateApple());
//                 setSnake((prevSnake) => [{ ...head, direction }, ...prevSnake.slice(0, -1)]);
//               } else {
//                 const newSnake = [{ ...head, direction }, ...snake.slice(0, snake.length - 1)];
//                 setSnake(newSnake);
//               }
//             };
        
//             const isAppleEaten = (head) => {
//               return (
//                 Math.abs(head.x - apple.x) <= appleTolerance &&
//                 Math.abs(head.y - apple.y) <= appleTolerance
//               );
//             };
        
        
//             const getNewDirection = (keyCode) => {
//               switch (keyCode) {
//                 case 37: // Left arrow key
//                   return 'LEFT';
//                 case 38: // Up arrow key
//                   return 'UP';
//                 case 39: // Right arrow key
//                   return 'RIGHT';
//                 case 40: // Down arrow key
//                   return 'DOWN';
//                 default:
//                   return null;
//               }
//             };
//     const headImages = {
//       UP: new Image(),
//       DOWN: new Image(),
//       LEFT: new Image(),
//       RIGHT: new Image(),
//     };

//     const bodyImages = {
//       UP: new Image(),
//       DOWN: new Image(),
//       LEFT: new Image(),
//       RIGHT: new Image(),
//     };

//     const tailImages = {
//       UP: new Image(),
//       DOWN: new Image(),
//       LEFT: new Image(),
//       RIGHT: new Image(),
//     };

//     headImages.UP.src = snakeHeadUp;
//     headImages.DOWN.src = snakeHeadDown;
//     headImages.LEFT.src = snakeHeadLeft;
//     headImages.RIGHT.src = snakeHeadRight;

//     bodyImages.UP.src = snakeBodyUp;
//     bodyImages.DOWN.src = snakeBodyDown;
//     bodyImages.LEFT.src = snakeBodyLeft;
//     bodyImages.RIGHT.src = snakeBodyRight;

//     tailImages.UP.src = snakeTailUp;
//     tailImages.DOWN.src = snakeTailDown;
//     tailImages.LEFT.src = snakeTailLeft;
//     tailImages.RIGHT.src = snakeTailRight;

//     const drawSnake = () => {
//               context.clearRect(0, 0, canvasWidth, canvasHeight);
        
//               snake.forEach((segment, index) => {
//                 let image;
//                 if (index === 0) {
//                   // Head image
//                   switch (segment.direction) {
//                     case 'UP':
//                       image = headImages.UP;
//                       break;
//                     case 'DOWN':
//                       image = headImages.DOWN;
//                       break;
//                     case 'LEFT':
//                       image = headImages.LEFT;
//                       break;
//                     case 'RIGHT':
//                       image = headImages.RIGHT;
//                       break;
//                     default:
//                       break;
//                   }
//                 } else if (index === snake.length - 1) {
//                     // Tail image
//                     const prevSegment = snake[index - 1];
//                     let tailDirection = prevSegment.direction;
              
//                     if (prevSegment.x === segment.x) {
//                       // Vertical tail segment
//                       if (prevSegment.y < segment.y) {
//                         tailDirection = 'UP';
//                       } else if (prevSegment.y > segment.y) {
//                         tailDirection = 'DOWN';
//                       }
//                     } else if (prevSegment.y === segment.y) {
//                       // Horizontal tail segment
//                       if (prevSegment.x < segment.x) {
//                         tailDirection = 'LEFT';
//                       } else if (prevSegment.x > segment.x) {
//                         tailDirection = 'RIGHT';
//                       }
//                     }
              
//                     switch (tailDirection) {
//                       case 'UP':
//                         image = tailImages.UP;
//                         break;
//                       case 'DOWN':
//                         image = tailImages.DOWN;
//                         break;
//                       case 'LEFT':
//                         image = tailImages.LEFT;
//                         break;
//                       case 'RIGHT':
//                         image = tailImages.RIGHT;
//                         break;
//                       default:
//                         break;
//                     }  
//                 } else {
//                   // Body image
//                   const prevSegment = snake[index - 1];
//                   let prevDirection = prevSegment.direction;
//                   let nextSegment = snake[index + 1];
        
//                   if (!nextSegment) {
//                     // If the current segment is the last segment
//                     nextSegment = segment;
//                   }
        
//                   if (prevSegment.x === nextSegment.x) {
//                     // Vertical body segment
//                     if (prevSegment.y < nextSegment.y) {
//                       prevDirection = 'DOWN';
//                     } else if (prevSegment.y > nextSegment.y) {
//                       prevDirection = 'UP';
//                     }
//                   } else if (prevSegment.y === nextSegment.y) {
//                     // Horizontal body segment
//                     if (prevSegment.x < nextSegment.x) {
//                       prevDirection = 'RIGHT';
//                     } else if (prevSegment.x > nextSegment.x) {
//                       prevDirection = 'LEFT';
//                     }
//                   }
        
//                   switch (prevDirection) {
//                     case 'UP':
//                       image = bodyImages.UP;
//                       break;
//                     case 'DOWN':
//                       image = bodyImages.DOWN;
//                       break;
//                     case 'LEFT':
//                       image = bodyImages.LEFT;
//                       break;
//                     case 'RIGHT':
//                       image = bodyImages.RIGHT;
//                       break;
//                     default:
//                       break;
//                   }
//                 }
        
//                 context.drawImage(image, segment.x, segment.y, snakeSize, snakeSize);
//               });
//     };    

//     const checkCollision = () => {
//       const head = snake[0];

//       // Check collision with walls
//       if (
//         head.x < 0 ||
//         head.y < 0 ||
//         head.x >= canvasWidth ||
//         head.y >= canvasHeight
//       ) {
//         gameOver();
//         return;
//       }

//       // Check collision with self
//       for (let i = 1; i < snake.length; i++) {
//         if (head.x === snake[i].x && head.y === snake[i].y) {
//           gameOver();
//           return;
//         }
//       }

//       // Check collision with apple
//       if (head.x === apple.x && head.y === apple.y) {
//         setApple(generateApple());
//         growSnake();
//         collectCard();
//       }
//     };

//     const gameOver = () => {
//       alert('Game Over');
//       setSnake([{ x: 50, y: 50, direction: 'RIGHT' }]);
//       setDirection('RIGHT');
//       setApple(generateApple());
//       setCollectedCards([]);
//     };

    

//     const growSnake = () => {
//       const tail = { ...snake[snake.length - 1] };
//       snake.push(tail);
//     };

//     const collectCard = () => {
//       if (currentCard) {
//         setCollectedCards([...collectedCards, currentCard]);
//         setCurrentCard(null);
//       }
//     };

//     const drawApple = () => {
//       context.fillStyle = 'white';
//       context.fillRect(apple.x, apple.y, snakeSize, snakeSize);
//     };

//     const drawBarrier = (barrier) => {
//       context.fillStyle = 'white';
//       context.fillRect(barrier.x, barrier.y, snakeSize, snakeSize);
//     };

//     const checkCardCollision = () => {
//       const head = snake[0];
//       const card = formatted.find((card) => card.word === head.word);
//       if (card && !collectedCards.includes(card.word)) {
//         setCurrentCard(card.word);
//       }
//     };
//     const handleKeyDown = (event) => {
//         const newDirection = getNewDirection(event.keyCode);
//         if (newDirection) {
//           setDirection(newDirection);
//         }
//       };
//     // const handleKeyDown = (event) => {
//     //   event.preventDefault();

//     //   const keyPressed = event.key;
//     //   let newDirection;

//     //   switch (keyPressed) {
//     //     case 'ArrowUp':
//     //       newDirection = 'UP';
//     //       break;
//     //     case 'ArrowDown':
//     //       newDirection = 'DOWN';
//     //       break;
//     //     case 'ArrowLeft':
//     //       newDirection = 'LEFT';
//     //       break;
//     //     case 'ArrowRight':
//     //       newDirection = 'RIGHT';
//     //       break;
//     //     default:
//     //       newDirection = direction;
//     //       break;
//     //   }

//     //   const oppositeDirections = {
//     //     UP: 'DOWN',
//     //     DOWN: 'UP',
//     //     LEFT: 'RIGHT',
//     //     RIGHT: 'LEFT',
//     //   };

//     //   if (newDirection !== oppositeDirections[direction]) {
//     //     setDirection(newDirection);
//     //   }
//     // };

//     const initializeGame = () => {
//       setApple(generateApple());
//       setBarriers(generateBarriers());
//       window.addEventListener('keydown', handleKeyDown);
//     };

//     const generateBarriers = () => {
//       const barriers = [];
//       const numBarriers = Math.floor(Math.random() * 6) + 3;

//       for (let i = 0; i < numBarriers; i++) {
//         const x = Math.floor(Math.random() * (canvasWidth / snakeSize)) * snakeSize;
//         const y = Math.floor(Math.random() * (canvasHeight / snakeSize)) * snakeSize;
//         barriers.push({ x, y });
//       }

//       return barriers;
//     };

//     const drawGame = () => {
//         context.clearRect(0, 0, canvasWidth, canvasHeight);
//         drawSnake();
//         drawApple();
//         barriers.forEach((barrier) => drawBarrier(barrier));
//       };

//     const gameLoop = () => {
//         checkCollision();
//         moveSnake();
//         checkCardCollision();
//         drawGame();
//         //context.clearRect(0, 0, canvasWidth, canvasHeight);
//         //barriers.forEach(drawBarrier); // Draw barriers before snake and apple
//         //drawSnake();
//         //drawApple();
//       };

//     initializeGame();
//     const gameInterval = setInterval(gameLoop, 100);

    

//     return () => {
//       clearInterval(gameInterval);
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   return (
//     <div>
//       <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} className="border-2 bg-sky-500/50"/>
//       <div>
//         <h2>Current Card: {currentCard}</h2>
//         <h2>Collected Cards: {collectedCards.join(', ')}</h2>
//       </div>
//     </div>
//   );
// };

// export default Snake;



















































// import React, { useEffect, useRef, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import snakeHeadUp from './snakeHeadUp.png';
// import snakeHeadDown from './snakeHeadDown.png';
// import snakeHeadLeft from './snakeHeadLeft.png';
// import snakeHeadRight from './snakeHeadRight.png';
// import snakeBodyUp from './snakeBodyUp.png';
// import snakeBodyDown from './snakeBodyDown.png';
// import snakeBodyLeft from './snakeBodyLeft.png';
// import snakeBodyRight from './snakeBodyRight.png';
// import snakeTailUp from './snakeTailUp.png';
// import snakeTailDown from './snakeTailDown.png';
// import snakeTailLeft from './snakeTailLeft.png';
// import snakeTailRight from './snakeTailRight.png';

// const Snake = () => {
//   const canvasRef = useRef(null);
//   const snakeSize = 40;
//   const canvasWidth = 800;
//   const canvasHeight = 800;
//   const appleTolerance = 20;
//   const location = useLocation();
//   const cards = location.state.cards;  

//   const [formatted, setFormatted] = useState(cards.map((card) => {
//   const [word, translation] = card.split(/[-–]/);
//         return { word, translation };
//       }));

//   const generateRandomPosition = () => {
//     const x = Math.floor(Math.random() * (canvasWidth / snakeSize)) * snakeSize;
//     const y = Math.floor(Math.random() * (canvasHeight / snakeSize)) * snakeSize;
//     return { x, y };
//   };

//   function generateBoxes(array) {
//     const newBoxes = [];
    
//     // Randomly select four unique indices from the array
//     const indices = [];
//     while (indices.length < 3) {
//       const index = Math.floor(Math.random() * array.length);
//       if (!indices.includes(index)) {
//         indices.push(index);
//       }
//     }
    
//     // Create a box object for each selected index
//     indices.forEach((index, i) => {
//       const word = array[index].word;
//       const x = Math.floor(Math.random() * (canvasWidth / snakeSize)) * snakeSize;
//       const y = Math.floor(Math.random() * (canvasHeight / snakeSize)) * snakeSize;
//       const box = { word, x, y, width: 100, height: 20, color: 'white', direction: 'horizontal' };
//       newBoxes.push(box);
//     });
    
//     return newBoxes;
//   }

//   function generateAppleBox(array) {
//     const newBoxes = [];
    
//     // Randomly select four unique indices from the array
//     const indices = [];
//     while (indices.length < 1) {
//       const index = Math.floor(Math.random() * array.length);
//       if (!indices.includes(index)) {
//         indices.push(index);
//       }
//     }
    
//     // Create a box object for each selected index
//     indices.forEach((index, i) => {
//       const word = array[index].word;
//       const translation = array[index].translation;
//       const x = Math.floor(Math.random() * (canvasWidth / snakeSize)) * snakeSize;
//       const y = Math.floor(Math.random() * (canvasHeight / snakeSize)) * snakeSize;
//       const box = { word, translation, x, y, width: 100, height: 20, color: 'white', direction: 'horizontal' };
//       newBoxes.push(box);
//     });
    
//     return newBoxes;
//   }

//   const [snake, setSnake] = useState([{ x: 50, y: 50, direction: 'RIGHT' }]);
//   const [direction, setDirection] = useState('RIGHT');
//   const [apple, setApple] = useState(generateAppleBox(formatted));
//   const [boxes, setBoxes] = useState(generateBoxes(formatted));
//   const [collect, setCollect] = useState([]);

//   const isAppleEaten = (head) => {
//     return (
//       Math.abs(head.x - apple[0].x) <= appleTolerance &&
//       Math.abs(head.y - apple[0].y) <= appleTolerance
//     );
//   };


//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');

//     const headImages = {
//       UP: new Image(),
//       DOWN: new Image(),
//       LEFT: new Image(),
//       RIGHT: new Image(),
//     };
//     const bodyImages = {
//       UP: new Image(),
//       DOWN: new Image(),
//       LEFT: new Image(),
//       RIGHT: new Image(),
//     };

//     const tailImages = {
//         UP: new Image(),
//         DOWN: new Image(),
//         LEFT: new Image(),
//         RIGHT: new Image(),
//       };

//     headImages.UP.src = snakeHeadUp;
//     headImages.DOWN.src = snakeHeadDown;
//     headImages.LEFT.src = snakeHeadLeft;
//     headImages.RIGHT.src = snakeHeadRight;

//     bodyImages.UP.src = snakeBodyUp;
//     bodyImages.DOWN.src = snakeBodyDown;
//     bodyImages.LEFT.src = snakeBodyLeft;
//     bodyImages.RIGHT.src = snakeBodyRight;

//     tailImages.UP.src = snakeTailUp;
//     tailImages.DOWN.src = snakeTailDown;
//     tailImages.LEFT.src = snakeTailLeft;
//     tailImages.RIGHT.src = snakeTailRight;

//     const moveSnake = () => {
//       const head = { ...snake[0] };

//       switch (direction) {
//         case 'RIGHT':
//           head.x += snakeSize;
//           break;
//         case 'LEFT':
//           head.x -= snakeSize;
//           break;
//         case 'UP':
//           head.y -= snakeSize;
//           break;
//         case 'DOWN':
//           head.y += snakeSize;
//           break;
//         default:
//           break;
//       }

//       if (isAppleEaten(head)) {
        
//         const updatedFormatted = formatted.filter((item) => item.word !== apple[0].word);
//         setFormatted(updatedFormatted);
//         setApple(generateAppleBox(formatted));
//         setCollect((prevCollect) => [...prevCollect, { word: apple[0].word, translation: apple[0].translation }]);
//         setBoxes(generateBoxes(formatted));
//         setSnake((prevSnake) => [{ ...head, direction }, ...prevSnake]);
//       } else {
//         const newSnake = [{ ...head, direction }, ...snake.slice(0, snake.length - 1)];
//         setSnake(newSnake);
//       }
//     };

    

//     const handleKeyDown = (event) => {
//       const newDirection = getNewDirection(event.keyCode);
//       if (newDirection) {
//         setDirection(newDirection);
//       }
//     };

//     const getNewDirection = (keyCode) => {
//       switch (keyCode) {
//         case 37: // Left arrow key
//           return 'LEFT';
//         case 38: // Up arrow key
//           return 'UP';
//         case 39: // Right arrow key
//           return 'RIGHT';
//         case 40: // Down arrow key
//           return 'DOWN';
//         default:
//           return null;
//       }
//     };

    
  
//     const drawSnake = () => {
//       context.clearRect(0, 0, canvasWidth, canvasHeight);
//       //const boxes = generateBoxes(formatted);
      

//       snake.forEach((segment, index) => {
//         let image;
//         if (index === 0) {
//           // Head image
//           switch (segment.direction) {
//             case 'UP':
//               image = headImages.UP;
//               break;
//             case 'DOWN':
//               image = headImages.DOWN;
//               break;
//             case 'LEFT':
//               image = headImages.LEFT;
//               break;
//             case 'RIGHT':
//               image = headImages.RIGHT;
//               break;
//             default:
//               break;
//           }
//         } else if (index === snake.length - 1) {
//             // Tail image
//             const prevSegment = snake[index - 1];
//             let tailDirection = prevSegment.direction;
      
//             if (prevSegment.x === segment.x) {
//               // Vertical tail segment
//               if (prevSegment.y < segment.y) {
//                 tailDirection = 'UP';
//               } else if (prevSegment.y > segment.y) {
//                 tailDirection = 'DOWN';
//               }
//             } else if (prevSegment.y === segment.y) {
//               // Horizontal tail segment
//               if (prevSegment.x < segment.x) {
//                 tailDirection = 'LEFT';
//               } else if (prevSegment.x > segment.x) {
//                 tailDirection = 'RIGHT';
//               }
//             }
      
//             switch (tailDirection) {
//               case 'UP':
//                 image = tailImages.UP;
//                 break;
//               case 'DOWN':
//                 image = tailImages.DOWN;
//                 break;
//               case 'LEFT':
//                 image = tailImages.LEFT;
//                 break;
//               case 'RIGHT':
//                 image = tailImages.RIGHT;
//                 break;
//               default:
//                 break;
//             }  
//         } else {
//           // Body image
//           const prevSegment = snake[index - 1];
//           let prevDirection = prevSegment.direction;
//           let nextSegment = snake[index + 1];

//           if (!nextSegment) {
//             // If the current segment is the last segment
//             nextSegment = segment;
//           }

//           if (prevSegment.x === nextSegment.x) {
//             // Vertical body segment
//             if (prevSegment.y < nextSegment.y) {
//               prevDirection = 'DOWN';
//             } else if (prevSegment.y > nextSegment.y) {
//               prevDirection = 'UP';
//             }
//           } else if (prevSegment.y === nextSegment.y) {
//             // Horizontal body segment
//             if (prevSegment.x < nextSegment.x) {
//               prevDirection = 'RIGHT';
//             } else if (prevSegment.x > nextSegment.x) {
//               prevDirection = 'LEFT';
//             }
//           }

//           switch (prevDirection) {
//             case 'UP':
//               image = bodyImages.UP;
//               break;
//             case 'DOWN':
//               image = bodyImages.DOWN;
//               break;
//             case 'LEFT':
//               image = bodyImages.LEFT;
//               break;
//             case 'RIGHT':
//               image = bodyImages.RIGHT;
//               break;
//             default:
//               break;
//           }
//         }

//         context.drawImage(image, segment.x, segment.y, snakeSize, snakeSize);
//       });

//     apple.forEach(box => {
//     context.fillStyle = box.color;
//     context.fillRect(box.x, box.y, box.width, box.height);
//     context.fillStyle = 'black';
//     context.fillText(box.word, box.x, box.y + box.height);
//     });

//     boxes.forEach(box => {
//     context.fillStyle = box.color;
//     context.fillRect(box.x, box.y, box.width, box.height);
//     context.fillStyle = 'black';
//     const fontSize = 16; // Adjust the font size as needed
//     context.font = `${fontSize}px sans-serif`;
//     context.fillText(box.word, box.x, box.y + box.height);
//     });
//     };

//     const gameLoop = () => {
//       moveSnake();
//       drawSnake();
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     const interval = setInterval(gameLoop, 200);
//     console.log(formatted)
//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//       clearInterval(interval);
//     };
//   }, [snake, direction, formatted, boxes,apple, collect]);

//   return (
//     <div className="flex flex-col items-center justify-center">
//   <h2 className="text-left mb-6">Current Card: {apple[0].translation}</h2>
//   <div className="flex flex-wrap justify-center">
//     <div className="w-full md:w-auto md:flex-grow md:mr-4">
//       <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} className="border-2 bg-sky-500/50" />
//     </div>
//     <div className="w-full md:w-auto md:flex-shrink-0 mt-20 md:mt-20 min-w-[240px]">
//       <div className="md:min-h-16">
//         <h3 className="mb-2">Collected Cards:</h3>
//         {collect.length > 0 ? (
//           <ul className="list-disc pl-4 mb-4">
//             {collect.map((card, index) => (
//               <li key={index}>{card.word} - {card.translation}</li>
//             ))}
//           </ul>
//         ) : (
//           <p>No cards collected yet</p>
//         )}
//       </div>
//     </div>
//   </div>
// </div>




//   );
//   }; 


// export default Snake;




















import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import snakeHeadUp from './snakeHeadUp.png';
import snakeHeadDown from './snakeHeadDown.png';
import snakeHeadLeft from './snakeHeadLeft.png';
import snakeHeadRight from './snakeHeadRight.png';
import snakeBodyUp from './snakeBodyUp.png';
import snakeBodyDown from './snakeBodyDown.png';
import snakeBodyLeft from './snakeBodyLeft.png';
import snakeBodyRight from './snakeBodyRight.png';
import snakeTailUp from './snakeTailUp.png';
import snakeTailDown from './snakeTailDown.png';
import snakeTailLeft from './snakeTailLeft.png';
import snakeTailRight from './snakeTailRight.png';

const Snake = () => {
  const canvasRef = useRef(null);
  const snakeSize = 40;
  const canvasWidth = 800;
  const canvasHeight = 800;
  const appleTolerance = 20;
  const location = useLocation();
  const cards = location.state.cards;  

  const [formatted, setFormatted] = useState(cards.map((card) => {
  const [word, translation] = card.split(/[-–]/);
        return { word, translation };
      }));

  const generateRandomPosition = () => {
    const x = Math.floor(Math.random() * (canvasWidth / snakeSize)) * snakeSize;
    const y = Math.floor(Math.random() * (canvasHeight / snakeSize)) * snakeSize;
    return { x, y };
  };

  function generateBoxes(array) {
    const newBoxes = [];
    const indices = generateUniqueIndices(array, 3);
    
    indices.forEach((index, i) => {
      const word = array[index].word;
      const boxWidth = 100;
      const boxHeight = 20;
      const gap = 30; // Minimum gap between boxes
      const maxX = canvasWidth - boxWidth - gap;
      const maxY = canvasHeight - boxHeight - gap;
      
      let isOverlapping = true;
      let x, y;
      
      while (isOverlapping) {
        x = Math.floor(Math.random() * maxX);
        y = Math.floor(Math.random() * maxY);
        
        isOverlapping = newBoxes.some((box) => {
          return (
            x < box.x + box.width + gap &&
            x + boxWidth + gap > box.x &&
            y < box.y + box.height + gap &&
            y + boxHeight + gap > box.y
          );
        });
      }
      
      const box = { word, x, y, width: boxWidth, height: boxHeight, color: 'white', direction: 'horizontal', isBlinking: false };
      newBoxes.push(box);
    });
    
    return newBoxes;
  }
  
  function generateAppleBox(array, existingBoxes) {
    const filteredArray = array.filter((item) => !existingBoxes.includes(item.word));
  
    if (filteredArray.length === 0) {
      setIsGameFinished(true);
      return []; // Return an empty array since there are no more cards
    }
  
    const appleIndex = Math.floor(Math.random() * filteredArray.length);
    const apple = filteredArray[appleIndex];
  
    const appleWidth = 100;
    const appleHeight = 20;
    const gap = 30; // Minimum gap between boxes
    const maxX = canvasWidth - appleWidth - gap;
    const maxY = canvasHeight - appleHeight - gap;
  
    let isOverlapping = true;
    let x, y;
  
    while (isOverlapping) {
      x = Math.floor(Math.random() * maxX);
      y = Math.floor(Math.random() * maxY);
  
      isOverlapping = existingBoxes.some((box) => {
        return (
          x < box.x + box.width + gap &&
          x + appleWidth + gap > box.x &&
          y < box.y + box.height + gap &&
          y + appleHeight + gap > box.y
        );
      });
    }
  
    const box = {
      word: apple.word,
      translation: apple.translation,
      x,
      y,
      width: appleWidth,
      height: appleHeight,
      color: 'white',
      direction: 'horizontal',
      isBlinking: false,
    };
  
    return [box];
  }
  
  
  
  function generateUniqueIndices(array, count, excludeArray = []) {
    const indices = [];

  while (indices.length < count) {
    let index = Math.floor(Math.random() * array.length);
    const excludedWords = excludeArray.map((box) => box.word);

    while (indices.includes(index) || excludedWords.includes(array[index].word)) {
      index = Math.floor(Math.random() * array.length);
    }

    indices.push(index);
  }

  return indices;
}
  

  const [snake, setSnake] = useState([{ x: 50, y: 50, direction: 'RIGHT' }]);
  const [direction, setDirection] = useState('RIGHT');
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [boxes, setBoxes] = useState(generateBoxes(formatted));
  const [apple, setApple] = useState(generateAppleBox(formatted,boxes.map(box => box.word)));
  const [collect, setCollect] = useState([]);
  const [timer, setTimer] = useState(formatted.length * 2);
  const [isGameOver, setIsGameOver] = useState(false);


  const isAppleEaten = (head) => {
    return (
      timer > 0 &&
      Math.abs(head.x - apple[0].x) <= appleTolerance + 30 &&
      Math.abs(head.y - apple[0].y) <= appleTolerance
    );
  };


  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const headImages = {
      UP: new Image(),
      DOWN: new Image(),
      LEFT: new Image(),
      RIGHT: new Image(),
    };
    const bodyImages = {
      UP: new Image(),
      DOWN: new Image(),
      LEFT: new Image(),
      RIGHT: new Image(),
    };

    const tailImages = {
        UP: new Image(),
        DOWN: new Image(),
        LEFT: new Image(),
        RIGHT: new Image(),
      };

    headImages.UP.src = snakeHeadUp;
    headImages.DOWN.src = snakeHeadDown;
    headImages.LEFT.src = snakeHeadLeft;
    headImages.RIGHT.src = snakeHeadRight;

    bodyImages.UP.src = snakeBodyUp;
    bodyImages.DOWN.src = snakeBodyDown;
    bodyImages.LEFT.src = snakeBodyLeft;
    bodyImages.RIGHT.src = snakeBodyRight;

    tailImages.UP.src = snakeTailUp;
    tailImages.DOWN.src = snakeTailDown;
    tailImages.LEFT.src = snakeTailLeft;
    tailImages.RIGHT.src = snakeTailRight;


    const moveSnake = () => {
      const head = { ...snake[0] };

      switch (direction) {
        case 'RIGHT':
          head.x += snakeSize;
          break;
        case 'LEFT':
          head.x -= snakeSize;
          break;
        case 'UP':
          head.y -= snakeSize;
          break;
        case 'DOWN':
          head.y += snakeSize;
          break;
        default:
          break;
      }

      if (isAppleEaten(head)) {
        
        const updatedFormatted = formatted.filter((item) => item.word !== apple[0].word);
        setFormatted(updatedFormatted);
        const updatedBoxes = generateBoxes(updatedFormatted);
        setBoxes(updatedBoxes);
        setApple(generateAppleBox(updatedFormatted,boxes.map(box => box.word)));
        setCollect((prevCollect) => [...prevCollect, { word: apple[0].word, translation: apple[0].translation }]);
        setSnake((prevSnake) => [{ ...head, direction }, ...prevSnake]);
      } else if (isGameFinished){

      } else if (boxes.find((box) => Math.abs(head.x - box.x) <= appleTolerance + 30 && Math.abs(head.y - box.y) <= appleTolerance)) {
        const updatedBoxes2 = boxes.map((box) => {
          if (Math.abs(head.x - box.x) <= appleTolerance + 30 && Math.abs(head.y - box.y) <= appleTolerance) {
            const newSnake = [{ ...head, direction }, ...snake.slice(0, snake.length - 1)];
            setSnake(newSnake);
            if (timer === 0) {
                setIsGameFinished(true);
                clearInterval(interval);
              }
            return { ...box, isBlinking: true };
          }
          const newSnake = [{ ...head, direction }, ...snake.slice(0, snake.length - 1)];
          setSnake(newSnake);
          if (timer === 0) {
            setIsGameFinished(true);
            clearInterval(interval);
          }
          return box;
        });
        setBoxes(updatedBoxes2);
      } else {
        const newSnake = [{ ...head, direction }, ...snake.slice(0, snake.length - 1)];
        setSnake(newSnake);
        if (timer === 0) {
            setIsGameFinished(true);
            clearInterval(interval);
          }
      }
    };

    

    const handleKeyDown = (event) => {
      const newDirection = getNewDirection(event.keyCode);
      if (newDirection) {
        setDirection(newDirection);
      }
    };

    const getNewDirection = (keyCode) => {
      switch (keyCode) {
        case 37: // Left arrow key
          return 'LEFT';
        case 38: // Up arrow key
          return 'UP';
        case 39: // Right arrow key
          return 'RIGHT';
        case 40: // Down arrow key
          return 'DOWN';
        default:
          return null;
      }
    };

    
  
    const drawSnake = () => {
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      //const boxes = generateBoxes(formatted);
      

      snake.forEach((segment, index) => {
        let image;
        if (index === 0) {
          // Head image
          switch (segment.direction) {
            case 'UP':
              image = headImages.UP;
              break;
            case 'DOWN':
              image = headImages.DOWN;
              break;
            case 'LEFT':
              image = headImages.LEFT;
              break;
            case 'RIGHT':
              image = headImages.RIGHT;
              break;
            default:
              break;
          }
        } else if (index === snake.length - 1) {
            // Tail image
            const prevSegment = snake[index - 1];
            let tailDirection = prevSegment.direction;
      
            if (prevSegment.x === segment.x) {
              // Vertical tail segment
              if (prevSegment.y < segment.y) {
                tailDirection = 'UP';
              } else if (prevSegment.y > segment.y) {
                tailDirection = 'DOWN';
              }
            } else if (prevSegment.y === segment.y) {
              // Horizontal tail segment
              if (prevSegment.x < segment.x) {
                tailDirection = 'LEFT';
              } else if (prevSegment.x > segment.x) {
                tailDirection = 'RIGHT';
              }
            }
      
            switch (tailDirection) {
              case 'UP':
                image = tailImages.UP;
                break;
              case 'DOWN':
                image = tailImages.DOWN;
                break;
              case 'LEFT':
                image = tailImages.LEFT;
                break;
              case 'RIGHT':
                image = tailImages.RIGHT;
                break;
              default:
                break;
            }  
        } else {
          // Body image
          const prevSegment = snake[index - 1];
          let prevDirection = prevSegment.direction;
          let nextSegment = snake[index + 1];

          if (!nextSegment) {
            // If the current segment is the last segment
            nextSegment = segment;
          }

          if (prevSegment.x === nextSegment.x) {
            // Vertical body segment
            if (prevSegment.y < nextSegment.y) {
              prevDirection = 'DOWN';
            } else if (prevSegment.y > nextSegment.y) {
              prevDirection = 'UP';
            }
          } else if (prevSegment.y === nextSegment.y) {
            // Horizontal body segment
            if (prevSegment.x < nextSegment.x) {
              prevDirection = 'RIGHT';
            } else if (prevSegment.x > nextSegment.x) {
              prevDirection = 'LEFT';
            }
          }

          switch (prevDirection) {
            case 'UP':
              image = bodyImages.UP;
              break;
            case 'DOWN':
              image = bodyImages.DOWN;
              break;
            case 'LEFT':
              image = bodyImages.LEFT;
              break;
            case 'RIGHT':
              image = bodyImages.RIGHT;
              break;
            default:
              break;
          }
        }

        context.drawImage(image, segment.x, segment.y, snakeSize, snakeSize);
      });

    apple.forEach(box => {
    context.fillStyle = box.color;
    context.fillRect(box.x, box.y, box.width, box.height);
    context.fillStyle = 'black';
    context.fillText(box.word, box.x, box.y + box.height);
    });

    boxes.forEach((box) => {
    context.fillStyle = box.color;
    if (box.isBlinking) {
        context.fillStyle = "red";
      } else{
        context.fillStyle = "white";
      }
    context.fillRect(box.x, box.y, box.width, box.height);
    context.fillStyle = 'black';
    const fontSize = 16; // Adjust the font size as needed
    context.font = `${fontSize}px sans-serif`;
    context.fillText(box.word, box.x, box.y + box.height);
    });
    };

    const gameLoop = () => {
      moveSnake();
      drawSnake();
    };

    document.addEventListener('keydown', handleKeyDown);
    const interval = setInterval(gameLoop, 200);
    console.log(formatted)
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      clearInterval(interval);
    };
  }, [snake, direction, formatted, boxes,apple, collect,isGameFinished]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
  
    if (timer === 0) {
      setIsGameFinished(true);
      clearInterval(timerInterval);
    }
  
    return () => {
      clearInterval(timerInterval);
    };
  }, [timer]);

  return (
    <div className="flex flex-col items-center justify-center">
   <div className="text-center mb-6 mr-60"> 
  <h2 >
  Timer: <span className="bg-yellow-300 px-2 py-1 rounded">{timer}s</span> | Current Card: {apple[0].translation}
</h2>
</div>
  <div className="flex flex-wrap justify-center">
    <div className="w-full md:w-auto md:flex-grow md:mr-4">
      <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} className="border-2 bg-sky-500/50" />
    </div>
    {isGameFinished && (
  <div className="fixed inset-0 flex items-center justify-center mr-60 ">
    <div className="bg-gray-300 p-8 rounded-lg shadow-lg w-80 absolute left-1/2 transform -translate-x-1/2 mr-60">
      <h1 className="text-2xl font-bold mb-4 ml-20">Game Over</h1>
      {/* Add any additional content or styling for the pop-up window */}
    </div>
  </div>
)}
    <div className="w-full md:w-auto md:flex-shrink-0 mt-20 md:mt-20 min-w-[240px]">
      <div className="md:min-h-16">
        <h3 className="mb-2">Collected Cards:</h3>
        {collect.length > 0 ? (
          <ul className="list-disc pl-4 mb-4">
            {collect.map((card, index) => (
              <li key={index}>{card.word} - {card.translation}</li>
            ))}
          </ul>
        ) : (
          <p>No cards collected yet</p>
        )}
      </div>
    </div>
  </div>
</div>




  );
  }; 


export default Snake;