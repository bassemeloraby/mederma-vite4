import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { nanoid } from "nanoid";

const links = [
  { id: nanoid(), url: "/", text: "home" },
  { id: nanoid(), url: "about", text: "about" },
  { id: nanoid(), url: "drugs", text: "drugs" },
  { id: nanoid(), url: "cart", text: "cart" },
  { id: nanoid(), url: "checkout", text: "checkout" },
  { id: nanoid(), url: "orders", text: "orders" },
];
const NavLinks = () => {

 
  return (
    <Fragment>
      {links.map((link) => {
        const { id, url, text } = link;
        // if ((url === 'checkout' || url === 'orders') && !user) return null;

        return (
          <li key={id}>
            <NavLink className="capitalize" to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </Fragment>
  );
};

export default NavLinks;
