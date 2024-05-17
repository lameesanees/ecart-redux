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

function Header() {
  return (
    <MDBNavbar dark bgColor="dark">
      <MDBContainer fluid>
        <Link to={"/"} className="text-decoration-none">
          <MDBNavbarBrand style={{ fontFamily: "cursive" }}>
            <img src="https://cdn-icons-png.flaticon.com/256/12441/12441386.png" className="img-fluid" style={{width:"10%"}} alt="" />
            EasyBuy.com
          </MDBNavbarBrand>
        </Link>
        <MDBInputGroup tag="form" className="d-flex w-auto mb-3 gap-4 m-2">
         <Link to = {"/wish"}>
         <button className="btn btn-light rounded">
            {""}
            <FaHeart style={{ color: "red", fontSize: "20px" }} />{" "}
            <span>0</span>
          </button></Link>
          <Link to ={"/cart"}>
          <button className="btn btn-light rounded">
            {""}
            <FaCartPlus style={{ color: "black", fontSize: "20px" }} />{" "}
            <span>0</span>
          </button></Link>
        </MDBInputGroup>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Header;
