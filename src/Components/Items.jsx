import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

import { FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../redux/slices/wishlistSlice";
function Items() {
  const result = useFetch("https://dummyjson.com/products");
  console.log(result);
const dispatch = useDispatch()
  return (
    <>
      <h1 className="m-2 p-2 text-center" style={{ color: "darkolivegreen" }}>
        Shop your Items
      </h1>
      <div className="m-3 p-1">
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          {result?.length > 0 ? (
            result.map((product, index) => (
              <MDBCol key={index} className="mb-3">
                <MDBCard style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <MDBCardImage src={product.thumbnail} alt="..." position="top" className="img-fluid" style={{ height: "300px", objectFit: "cover" }} />
                  <MDBCardBody className="d-flex flex-column" style={{ height: "100%" }}>
                    <MDBCardTitle>{product.title}</MDBCardTitle>
                    <MDBCardText>
                      {product.description}
                    </MDBCardText>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <p style={{ color: "red", margin: 0 }}>{product.price}/-</p>
                      <div>

                          <button
                          onClick={()=>dispatch(addToWishlist(product))}
                            className="btn btn-lg"
                            style={{ fontSize: "20px", color: "red" }}
                          >
                            <FaHeart />
                          </button>
                    
                          <button
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
    </>
  );
}

export default Items;
