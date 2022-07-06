// React
import React, { useState } from 'react';
// stylesheets
import '../../Stylesheet/css/App.css';
// Components
import { Navbar } from '../Navbar/Navbar.jsx';
import { ProductPictures } from '../../Containers/ProductPictures/ProductPictures.jsx';
// Import source images
import Logo from '../../images/logo.svg';
import MenuIcon from '../../images/icon-menu.svg';


function App() {
  const [openNav, setOpenNav] = useState(false);
  const menuToggle = () => {
    setOpenNav(prevState => !prevState);
    console.log(openNav);
  };

  return (
    <div className="App">
      <header>
        <div className="mobile-menu" onClick={menuToggle}>
          <img src={MenuIcon} alt="menu icon" />
        </div>
        <div className="logo">
          <img src={Logo} alt="company logo" />
        </div>
        <Navbar isOpen={openNav}/>
      </header>
      <main>
        <div className="container">

          <div className="stock-pictures">
            <ProductPictures />
          </div>

          <section className="product-info">

            <div className="header">
              <aside>sneaker company</aside>
              <h1>Fall Limited Edition Sneakers</h1>
            </div>

            <article>
              <p>
                These low-profile sneakers are your perfect casual wear companion.
                Featuring a durable rubber outer sole, they'll withstand everything
                the weather can offer.
              </p>
            </article>

            <section className="price">
              <div className="discounted-price">$125.00</div>
              <div className="discounted-percentage">50%</div>
              <div className="full-price">$250.00</div>
            </section>

            <section className="add-to-card">
              <div className="quantity">
                button
                field
                button
              </div>

              <div className="add-to-card">
                button
              </div>
            </section>

          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
