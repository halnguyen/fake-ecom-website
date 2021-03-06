// React
import React, { useState, useEffect } from 'react';
// stylesheets
import '@root/Stylesheet/css/App.css';
// Components
import { Navbar } from '@root/Components/Navbar/Navbar.jsx';
import { ProductPictures } from '@root/Containers/ProductPictures/ProductPictures.jsx';
import { AddToCard } from '@root/Containers/AddToCard/AddToCard';
// Import source images


function App() {
  const [openNav, setOpenNav] = useState(false);

  // Pricing
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(250);
  const [sale, setSale] = useState(0.5);
  const [finalPrice, setFinalPrice] = useState(0);

  // Handle Add to cart
  const [cart, setCart] = useState({});
  const handleSubmit = (quantity, price) => {
    setCart(prevCart => {
      return { };
    });
  };

  useEffect(() => console.log(cart), [cart]); // for the buggo

  useEffect(() => {
    setFinalPrice(() => price * sale);
  }, [sale, price])

  return (
    <div className="App">
      <header>
        <Navbar setOpenNav={setOpenNav} isOpen={openNav}/>
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
              <div className="discounted-price">${finalPrice.toFixed(2)}</div>
              <div className="discounted-percentage">{sale * 100}%</div>
              <div className="full-price">${price.toFixed(2)}</div>
            </section>

            <section className="add-to-card">
              <AddToCard
                price={finalPrice}
                onSubmit={handleSubmit}
              />
            </section>

          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
