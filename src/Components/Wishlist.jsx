import React from "react";
import { FaCartPlus, FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { deleteFromWishlist } from "../redux/slices/wishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";
function Wishlist() {
  const dispatch = useDispatch();
  const wishlistArray = useSelector((state) => state.wishlistReducer);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Added to Cart",
      showConfirmButton: false,
      timer: 1500
    });
  }
  return (
    <div
      className="m-4 p-5"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h1 className="text-center text-danger m-2 mt-3 p-1">My Wishlist</h1>
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        {wishlistArray?.length > 0 ? (
          wishlistArray.map((product, index) => (
            <MDBCol key={index} className="mb-3">
              <MDBCard
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <MDBCardImage
                  src={product.thumbnail}
                  alt="..."
                  position="top"
                  className="img-fluid"
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <MDBCardBody
                  className="d-flex flex-column"
                  style={{ height: "100%" }}
                >
                  <MDBCardTitle>{product.title}</MDBCardTitle>
                  <MDBCardText>{product.description}</MDBCardText>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <p style={{ color: "red", margin: 0 }}>{product.price}/-</p>
                    <div>
                      <button
                        onClick={() => dispatch(deleteFromWishlist(product.id))}
                        className="btn btn-lg"
                        style={{ fontSize: "20px", color: "red" }}
                      >
                        <FaTrash />
                      </button>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="btn btn-lg"
                        style={{ fontSize: "20px", color: "black" }}
                      >
                        <FaCartPlus />
                      </button>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))
        ) : (
          <p>No products available</p>
        )}
      </MDBRow>
    </div>
  );
}

export default Wishlist;
