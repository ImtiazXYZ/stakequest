import { useState } from 'react';

const CartSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Sample cart items data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Gaming Headphone",
      image: "assets/img/product/product_thumb_1_1.png",
      price: 940.00,
      quantity: 1
    },
    // Other items...
  ]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div className={`sidemenu-wrapper sidemenu-cart ${isOpen ? 'active' : ''}`}>
      <div className="sidemenu-content">
        <button className="closeButton sideMenuCls" onClick={() => setIsOpen(false)}>
          <i className="far fa-times"></i>
        </button>
        
        <div className="widget woocommerce widget_shopping_cart">
          <h3 className="widget_title">Shopping cart</h3>
          <div className="widget_shopping_cart_content">
            <ul className="woocommerce-mini-cart cart_list product_list_widget">
              {cartItems.map(item => (
                <li key={item.id} className="woocommerce-mini-cart-item mini_cart_item">
                  <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times"></i>
                  </a>
                  <a href="#">
                    <img src={item.image} alt="Cart Image" />
                    {item.name}
                  </a>
                  <span className="quantity">
                    {item.quantity} ×
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">$</span>
                      {item.price.toFixed(2)}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            
            <p className="woocommerce-mini-cart__total total">
              <strong>Subtotal:</strong>
              <span className="woocommerce-Price-amount amount">
                <span className="woocommerce-Price-currencySymbol">$</span>
                {calculateTotal()}
              </span>
            </p>
            
            <p className="woocommerce-mini-cart__buttons buttons">
              <a href="cart.html" className="th-btn wc-forward">
                View cart <i className="fa-solid fa-arrow-up-right ms-3"></i>
              </a>
              <a href="checkout.html" className="th-btn checkout wc-forward">
                Checkout <i className="fa-solid fa-arrow-up-right ms-3"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;