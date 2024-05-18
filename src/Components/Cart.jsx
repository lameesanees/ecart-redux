import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash, FaHeart } from "react-icons/fa";
import { addToWishlist } from "../redux/slices/wishlistSlice";
import { deleteFromCart, emptyCart } from "../redux/slices/cartSlice";
import Swal from "sweetalert2";
import {
  MDBContainer,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const cartArray = useSelector((state) => state.cartReducer);

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
    dispatch(deleteFromCart(product.id));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Added to Wishlist",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const calculateTotal = () => {
    return cartArray.reduce((total, product) => total + product.price, 0);
  };

  const handleEmptyCart = () => {
    dispatch(emptyCart());
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Order has been placed!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div
      className="p-5 m-3"
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MDBContainer>
        <h1 className="text-center text-danger mt-3 mb-5">My Cart</h1>
        {cartArray?.length > 0 ? (
          <div className="w-100">
            <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                  <th scope="col">Actions</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {cartArray.map((product, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                    </td>
                    <td>{product.description}</td>
                    <td>{product.price}/-</td>
                    <td>
                      <MDBBtn
                        color="danger"
                        onClick={() => dispatch(deleteFromCart(product.id))}
                        className="me-2"
                      >
                        <FaTrash />
                      </MDBBtn>
                      <MDBBtn
                        color="warning"
                        onClick={() => handleAddToWishlist(product)}
                      >
                        <FaHeart />
                      </MDBBtn>
                    </td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>

            <div
              className="mt-4 p-3"
              style={{
                width: "100%",
                border: "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#fff",
              }}
            >
              <h3 className="text-center mb-4">Bill Summary</h3>
              <div className="d-flex justify-content-between mb-3">
                <strong>Total Items:</strong>
                <span>{cartArray.length}</span>
              </div>
              <div className="d-flex justify-content-between">
                <strong>Total Price:</strong>
                <span>{calculateTotal()}/-</span>
              </div>
              <div className="text-center mt-4">
                <button
                  onClick={() => handleEmptyCart()}
                  className="btn btn-sm btn-success"
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center">No products available</p>
        )}
      </MDBContainer>
    </div>
  );
}

export default Cart;
