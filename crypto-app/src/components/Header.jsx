import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <Button variant={"outline"} color={"Gold"}>
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"ghost"} color={"Gold"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={"ghost"} color={"Gold"}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
