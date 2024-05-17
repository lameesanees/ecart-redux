import React from 'react';
import { FaTrash } from 'react-icons/fa';

function Cart() {
  const cartItems = [
    { id: 1, name: 'Product 1', price: 100, quantity: 1, image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/bag/y/o/3/-original-imagrcjhpnnduhd6.jpeg?q=90&crop=false' }
  ];
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f5f5f5',
      }}
    >
      <h1 className="text-center text-danger">My Cart</h1>
      <div
        style={{
          width: '80%',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {cartItems.map(item => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: '150px',
                height: '150px',
                objectFit: 'cover',
                marginRight: '20px',
                borderRadius: '8px',
              }}
            />
            <div style={{ flex: '1' }}>
              <h3>{item.name}</h3>
              <p style={{ color: 'red' }}>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: '#dc3545',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              <FaTrash style={{ color: 'white', fontSize: '20px' }} />
            </button>
          </div>
        ))}

        <div
          style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '100%',
            textAlign: 'center',
            marginTop: '20px',
          }}
        >
          <h2>Cart Summary</h2>
          <p>Total Items: {totalItems}</p>
          <p>Total Price: ${totalPrice}</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
