import React, { useState } from "react";
import "./SearchArea.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Button, Form, NavDropdown, Offcanvas } from "react-bootstrap";
import { ImLocation } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { GiSelfLove, GiShoppingCart } from "react-icons/gi";
import { useContext } from "react";
import { RingContext } from "../../App";
import Cart from "../Cart/Cart";
import { Link, useNavigate } from "react-router-dom";

const SearchArea = ({ ...props }) => {
  const [crt, setCrt] = useContext(RingContext);
const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleDeleteProduct = (id) => {
    const rest = crt.filter((product) => product.id !== id);
    //  let newCart = [...crt, rest]
    setCrt(rest);
  };

  const itemModifier = (idx, status) => {
    const preCard = [...crt];

    if (status) {
      preCard[idx].stock = preCard[idx].stock + 1;
    } else if (!status && preCard[idx].stock > 0) {
      preCard[idx].stock = preCard[idx].stock - 1;
    }
    setCrt(preCard);
  };
  let total = 0;
  for (const cart of crt) {
    total = total + cart.price * cart.stock;
  }
  const storeLogo =
    "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/logo-1.svg";
  return (
    <div className="d-flex justify-content-around  mt-3 align-items-center">
      <div>
        <img src={storeLogo} alt="" />
      </div>
      <div className="search-container">
        <Form className="d-flex W-50">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-3"
            aria-label="Search"
          />
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="All Category"
            menuVariant="dark mt-3"
          >
            <NavDropdown.Item href="#action/3.1">
              The Power of Thinking Big
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">
              How to Train Your Brain
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">
              Rich Dad Poor Dad
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">You Can Win</NavDropdown.Item>
          </NavDropdown>
          <Button variant="outline">
            <AiOutlineSearch />
          </Button>
        </Form>
      </div>
      <div className="d-flex ">
        <ImLocation className="location-logo" />
        <h5>
          <u>Find a Book Store</u>
        </h5>
      </div>
      <div className="notification-logo">
        <span>
          <Link to="/profile">
            <CgProfile />
          </Link>
        </span>
        <span>
          <GiSelfLove />
        </span>
        <span onClick={() => setShow(true)} className="ecom-card">
          <GiShoppingCart />
          <div className="notification-value">
            <p className="text-center">{crt.length}</p>
          </div>
        </span>
        <div className="">
          <Offcanvas
            placement={"end"}
            name={"start"}
            show={show}
            onHide={() => setShow(false)}
            {...props}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                {crt.length < 1 ? "Please Add at least one item" : crt.length}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {crt.map((item, index) => (
                <Cart
                  item={item}
                  itemModifier={itemModifier}
                  handleDeleteProduct={handleDeleteProduct}
                  key={item.id}
                  index={index}
                ></Cart>
              ))}
              <h3>{total.toFixed(2)}</h3>
              <button className="btn btn-primary" onClick={()=>navigate('/shipment')}>Proceed Shipping</button>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </div>
  );
};

export default SearchArea;
