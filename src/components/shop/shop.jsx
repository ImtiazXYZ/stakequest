import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "Gaming Headphone",
    price: "$177.85",
    image: "assets/img/product/product_1_1.png",
    link: "/shop-details",
  },
  {
    id: 2,
    title: "Gaming Mouse",
    price: "$120.00",
    image: "assets/img/product/product_1_2.png",
    link: "/shop-details",
  },
  {
    id: 3,
    title: "Gaming Keyboard",
    price: "$96.85",
    image: "assets/img/product/product_1_3.png",
    link: "/shop-details",
  },
  {
    id: 4,
    title: "Gaming Chair",
    price: "$108.85",
    image: "assets/img/product/product_1_4.png",
    link: "/shop-details",
  },
  // Add more products as needed...
];

const Shop = () => {
  return (
    <>
      {/* Breadcumb */}
      <div
        className="breadcumb-wrapper"
        style={{ backgroundImage: `url(assets/img/bg/breadcumb-bg.jpg)` }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Shop</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Shop</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Product Area */}
      <section className="space-top space-extra2-bottom">
        <div className="container">
          <div className="th-sort-bar">
            <div className="row justify-content-between align-items-center">
              <div className="col-md">
                <p className="woocommerce-result-count">
                  Showing 1–{products.length} of {products.length} results
                </p>
              </div>
              <div className="col-md-auto">
                <form className="woocommerce-ordering">
                  <select name="orderby" className="orderby">
                    <option value="menu_order" defaultValue>
                      Default Sorting
                    </option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="rating">Sort by rating</option>
                    <option value="date">Sort by latest</option>
                    <option value="price">Price: low to high</option>
                    <option value="price-desc">Price: high to low</option>
                  </select>
                </form>
              </div>
            </div>
          </div>

          <div className="row gy-40">
            {products.map((product) => (
              <div key={product.id} className="col-xl-3 col-lg-4 col-sm-6">
                <motion.div
                  className="th-product product-grid"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="product-img">
                    <img src={product.image} alt={product.title} />
                    <div className="overlay gradient-border"></div>
                    <div className="actions">
                      <Link to="/cart" className="icon-btn">
                        <i className="far fa-cart-plus"></i>
                      </Link>
                      <Link to="/wishlist" className="icon-btn">
                        <i className="fas fa-heart"></i>
                      </Link>
                      <a href="#QuickView" className="icon-btn popup-content">
                        <i className="fas fa-eye"></i>
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3 className="product-title">
                      <Link to={product.link}>{product.title}</Link>
                    </h3>
                    <span className="price">{product.price}</span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          <div className="th-pagination text-center pt-50">
            <ul>
              <li>
                <Link to="/shop">
                  <span className="btn-border"></span> 1
                </Link>
              </li>
              <li>
                <Link to="/shop?page=2">
                  <span className="btn-border"></span> 2
                </Link>
              </li>
              <li>
                <Link to="/shop?page=3">
                  <span className="btn-border"></span> 3
                </Link>
              </li>
              <li>
                <Link to="/shop?page=2">
                  <span className="btn-border"></span>
                  <i className="far fa-arrow-right"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
