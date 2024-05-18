import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBInputGroup,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";
import { FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"
function Header() {
const wishlistArray = useSelector((state)=>state.wishlistReducer)
const cartArray = useSelector((state)=>state.cartReducer)

  return (
    <MDBNavbar dark bgColor="dark" className="fixed-top">
      <MDBContainer fluid>
        <Link to={"/"} className="text-decoration-none">
          <MDBNavbarBrand style={{ fontFamily:"sans-serif" }}>
            <img src="https://cdn-icons-png.flaticon.com/256/12441/12441386.png" className="img-fluid" style={{width:"10%"}} alt="" />
            EasyBuy.com
          </MDBNavbarBrand>
        </Link>
        <MDBInputGroup tag="form" className="d-flex w-auto mb-3 gap-4 m-2">
         <Link to = {"/wish"}>
         <button className="btn btn-light rounded">
            {""}
            <FaHeart style={{ color: "red", fontSize: "20px" }} />{" "}
            <span>{wishlistArray.length}</span>
          </button></Link>
          <Link to ={"/cart"}>
          <button className="btn btn-light rounded">
            {""}
            <FaCartPlus style={{ color: "black", fontSize: "20px" }} />{" "}
            <span>{cartArray.length}</span>
          </button></Link>
        </MDBInputGroup>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Header;
