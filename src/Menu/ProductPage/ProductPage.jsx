import React from 'react';
import { products } from '../../Service/Service';
import './ProductPage.css';
import ScrollFadeWrapper from '../../Scroll/ScrollFadeWrapper';

const ProductPage = () => {
  const phone = "994513562838"; 

  const handleOrder = (productName) => {
    const message = `Salam! Mən bu məhsulu sifariş etmək istəyirəm: ${productName}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="product-page">
      <h1 className="page-title">Our Jewellery Collection</h1>

      <div className="product-grid">
        {products.map((product) => (
          <ScrollFadeWrapper key={product.id}> {/* `key={product.name}` istifadə edə bilərsən */}
            <div className="product-card">
              <img src={product.img} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button onClick={() => handleOrder(product.name)}>Sifariş et</button>
              </div>
            </div>
          </ScrollFadeWrapper>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
