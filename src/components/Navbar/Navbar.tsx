import React from "react";
import { NavLink } from "react-router-dom";

import { Flex } from "components/Box";
import { Span } from "components/Text";

import { links } from "config";

export default function Navbar() {
  return (
    <Flex
      alignItems="end"
      width="100vw"
      style={{ color: "white" }}
      fontSize="16px"
      fontWeight={500}
    >
      {links.map((link) => {
        return (
          <NavLink to="/" key={link.label}>
            <Span>{link.label}</Span>
          </NavLink>
        );
      })}
    </Flex>
  );
}
