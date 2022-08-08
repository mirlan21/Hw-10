import React, { useContext } from "react";
import styled from "styled-components";
import { MyContext } from "../context/myContext";
import Switch from "./Switch";

export const Header = () => {
  const context = useContext(MyContext);

  return (
    <HeaderContainer backgroundColor={context.theme ? "orange" : "yellow"}>
      <Switch />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
