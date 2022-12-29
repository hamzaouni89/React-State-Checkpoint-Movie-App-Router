import React from "react";
import { Navbar, FormControl } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const NavBar = ({ title, handleChange, rate, ratingChanged }) => {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        className="d-flex justify-content-between"
      >
        <Navbar.Brand href="#home">Films Store ...</Navbar.Brand>
        <div className="related_links">
          <ul className="menu">
            <Link to="/">
              <li className="menu-item">Home</li>
            </Link>
            <Link to="/login">
              <li className="menu-item">Login</li>
            </Link>
          </ul>
        </div>
        <div>
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            onChange={handleChange}
            value={title}
          />
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
            isHalf={true}
            value={rate}
          />
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
