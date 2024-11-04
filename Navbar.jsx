import React, { useState } from 'react';

// function Navbar() {

//   const [isNavbarVisible, setIsNavbarVisible] = useState(false);

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container">
//           <a className="navbar-brand" href="#">E-Shop</a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             onClick={() => {
//               if (isNavbarVisible) {
//                 setIsNavbarVisible(false);
//               }
//               {
//                 if (isNavbarVisible == false) {
//                   setIsNavbarVisible(true);
//                 }
//               }
//             }}>
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className={`collapse navbar-collapse ${isNavbarVisible} ? "show": ""}`} id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#">Home</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">Products</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">About</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">Contact</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav >
//     </>
//   )
// }

// export default Navbar;

// function Navbar() {

//   const [isNavbarVisible, setIsNavbarVisible] = useState(false);

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container">
//           <a className="navbar-brand" href="#">E-Shop</a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             onClick={() => {
//               if (isNavbarVisible) {
//                 setIsNavbarVisible(false);
//               }
//               {
//                 if (isNavbarVisible == false) {
//                   setIsNavbarVisible(true);
//                 }
//               }
//             }}>
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className={`collapse navbar-collapse ${isNavbarVisible} ? "show": ""}`} id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#">Home</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">Products</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">About</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">Contact</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav >
//     </>
//   )
// }

// export default Navbar;

function Navbar() {
  
  const [isNavbarShowing, setisNavbarShowing] = useState(false);

  const toggleNavbar = () => {
    setisNavbarShowing(!isNavbarShowing);
  };

  useEffect(() => {
    const syncNavbarState = () => {
      setisNavbarShowing(window.innerWidth >= 992);
    };

    syncNavbarState();

    window.addEventListener(`resize`, syncNavbarState);

    return () => windowEventListener(`resize`, syncNavbarState);
  }, []);
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#">E-Shop</a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => {toggleNavbar}}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavbarShowing} ? "show": ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav >
      </>
    )
  }
  
  export default Navbar;