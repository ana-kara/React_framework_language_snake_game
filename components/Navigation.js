// import React, { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'

// function Navigation(){
//     const [showMenu, setShowMenu] = useState(false)

//     let menu
//     let menuMask

//     if(showMenu){
//         menu = 
//         <div
//             className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
//         >
//             The menu
//         </div>

//         menuMask = 
//         <div
//             className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
//             onClick={() => setShowMenu(false)}
//         >

//         </div>
//     }

//     return (
//         <nav>
//             <span className="text-xl">
//                 <FontAwesomeIcon 
//                     icon={faBars}
//                     onClick={() => setShowMenu(!showMenu)}
//                 />
//             </span>

//             {menuMask}

//             { menu }
//         </nav>
//     )
// }

// export default Navigation










// import React, { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
// import {useTransition, animated} from 'react-spring'

// function Navigation(){
//     const [showMenu, setShowMenu] = useState(false)

//     const maskTransitions = useTransition([showMenu], [], {
//         from: { position: 'absolute', opacity: 0 },
//         enter: { opacity: 1 },
//         leave: { opacity: 0 },
//     })

//     const menuTransitions = useTransition([showMenu], false, {
//         from: { opacity: 0, transform: 'translateX(-100%)' },
//         enter: { opacity: 1, transform: 'translateX(0%)' },
//         leave: { opacity: 0, transform: 'translateX(-100%)' },
//     })

//     console.log('maskTransitions:', maskTransitions);
//     console.log('menuTransitions:', menuTransitions);
//     return (
//         <nav>
//             <span className="text-xl">
//                 <FontAwesomeIcon 
//                     icon={faBars}
//                     onClick={() => setShowMenu(!showMenu)}
//                 />
//             </span>

//             {
//                 maskTransitions.map(({ item, key, props }) =>
//                     item && 
//                     <animated.div 
//                         key={key} 
//                         style={props}
//                         className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
//                         onClick={() => setShowMenu(false)}
//                     >
//                     </animated.div>
//                 )
//             }

//             {
//                 menuTransitions.map(({ item, key, props }) =>
//                     item && 
//                     <animated.div 
//                         key={key} 
//                         style={props}
//                         className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3"
//                     >
//                         <span className="font-bold">
//                             The menu
//                         </span>
//                         <ul>
//                             <li>Home</li>
//                         </ul>
//                     </animated.div>
//                 )
//             }
//         </nav>
//     )
// }

// export default Navigation









import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const auth = getAuth();

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsSignedIn(!!user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log('Error signing out:', error.message);
    }
  };

  const maskTransitions = useTransition(showMenu, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const menuTransitions = useTransition(showMenu, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
  });

  const menu = menuTransitions((style, item) => item && (
    <animated.div
      style={style}
      className="fixed bg-white top-0 left-0 w-4/5 md:w-1/4 h-full z-50 shadow p-3"
    >
      <span className="font-bold ">GamifyLang</span> {/* Increase the font size for wide screens */}
      <ul className="mt-4 md:mt-8 md:mb-8 text-xl md:text-2xl"> {/* Add margin-top for wide screens */}
        <li>
          <Link
            to="/"
            className="text-blue-500 py-3 border-t border-b block"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/library"
            className="text-blue-500 py-3 border-b block"
            onClick={() => setShowMenu(false)}
          >
            Library
          </Link>
        </li>
        {isSignedIn ? (
          <>
            <li>
              <Link
                to="/mycards"
                className="text-blue-500 py-3 border-b block"
                onClick={() => setShowMenu(false)}
              >
                My Cards
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="text-blue-500 py-3 border-b block"
                onClick={handleSignOut}
              >
                Log out
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link
              to="/registration"
              className="text-blue-500 py-3 border-b block"
              onClick={() => setShowMenu(false)}
            >
              Registration
            </Link>
          </li>
        )}
      </ul>
    </animated.div>
  ));

  const menuMask = maskTransitions((style, item) => item && (
    <animated.div
      style={style}
      className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
      onClick={() => setShowMenu(false)}
    />
  ));

  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setShowMenu(!showMenu)}
        />
      </span>

      {menuMask}
      {menu}
    </nav>
  );
}

export default Navigation;
