import React from 'react';
import { Link } from 'react-router-dom';
import Items from './Items';
function Home() {
  return (
   <>
    <div style={{
      position: 'relative',
      height: '100vh', 
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      color: "white", // Set text color to white
      // You can add more styles here like padding, margin, etc.
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(12, 45, 224, 0.8) 100%), url('https://images.pexels.com/photos/5926462/pexels-photo-5926462.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1')`, // Set the background image with gradient
        backgroundRepeat: 'no-repeat', // Prevent background image from repeating
        backgroundSize: 'cover', // Make sure the image covers the entire container
        backgroundPosition: 'center', // Center the background image
        opacity: 0.7, // Adjust the opacity for a faded effect
      }}>
      </div>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Discover a New World of Shopping</h2>
        <p style={{ fontSize: '1.5rem' }}>Explore exciting opportunities with us!</p>
        <Link to = {"/items"}>
        <button className='btn text-white btn-dark'>SHOP NOW</button>

        </Link>
      </div>
    </div>
    <div>
      <Items/>
    </div>
   </>
  );
}

export default Home;
