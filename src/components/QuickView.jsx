import React from 'react';

const QuickView = () => {
  return (
    <div id="QuickView" className="white-popup mfp-hide">
      <div className="container bg-black3 rounded-10">
        <div className="row gx-60">
          <div className="col-lg-6">
            <div className="product-big-img">
              <div className="img">
                <img src="assets/img/product/product_details_1_1.png" alt="Product" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="product-about">
              <p className="price">$120.85<del>$150.99</del></p>
              <h2 className="product-title">Microphone G9000</h2>
              <div className="product-rating">
                <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                  <span style={{ width: '100%' }}>
                    Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating
                  </span>
                </div>
                <a href="shop-details.html" className="woocommerce-review-link">
                  (<span className="count">4</span> customer reviews)
                </a>
              </div>
              <p className="text">
                Syndicate customized growth strategies prospective human capital leverage other's optimal e-markets without transparent catalysts for change.
              </p>
              <div className="mt-2 link-inherit">
                <p>
                  <strong className="text-white me-3">Availability:</strong>
                  <span className="stock in-stock">
                    <i className="far fa-check-square me-2 ms-1"></i>In Stock
                  </span>
                </p>
              </div>
              <div className="actions">
                <div className="quantity">
                  <input type="number" className="qty-input" step="1" min="1" max="100" name="quantity" defaultValue="1" title="Qty" />
                  <button className="quantity-plus qty-btn"><i className="far fa-chevron-up"></i></button>
                  <button className="quantity-minus qty-btn"><i className="far fa-chevron-down"></i></button>
                </div>
                <button className="th-btn">Add to Cart <span className="icon"><i className="fa-solid fa-arrow-right ms-3"></i></span></button>
                <a href="wishlist.html" className="icon-btn"><i className="far fa-heart"></i></a>
              </div>
              <div className="product_meta">
                <span className="sku_wrapper">SKU: <span className="sku">Wheel-fits-chevy-camaro</span></span>
                <span className="posted_in">Category: <a href="shop.html">Dresses & Bags</a></span>
                <span>Tags: <a href="shop.html">Products</a> <a href="shop.html">Bags</a></span>
              </div>
            </div>
          </div>
        </div>
        <button title="Close (Esc)" type="button" className="mfp-close text-white">×</button>
      </div>
    </div>
  );
};

export default QuickView;
