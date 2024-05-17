import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function Wishlist() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h1 className="text-center text-danger">My Wishlist</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            width: "300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfZRR788bE_BRq-mFeHOiZcKLOmy5_dsUCHV3GxHZIew&s"
            alt="Product 1"
            style={{
              width: "90%",
              height: "250px",
              objectFit: "cover",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          />
          <h3>Handbag</h3>
          <p style={{color:"red"}}>$100</p>
          <div className="d-flex">
            <button className="btn btn-lg">
              <FaTrash style={{color:"red",fontSize:"20px"}} />
            </button>
            <Link to ={"/cart"}>
            <button className="btn btn-lg">
              <FaCartPlus style={{color:"black",fontSize:"20px"}}/>
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
