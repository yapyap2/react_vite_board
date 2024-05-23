import React, { useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import MyNavbar from "../../components/NavBar/MyNavbar";
import MyFooter from "../../components/Footer/MyFooter";
import { Container } from "react-bootstrap";
import { LoginContext } from "../../context/LoginContext";

function BoardLayout(props) {
  const [isLogin, setLogin] = useState(false);

  return (
    <>
      <LoginContext.Provider value={{ isLogin, setLogin }}>
        <MyNavbar brandTitle="My-React-Board" />
        <Container className="min-vh-100">
          <Outlet />
        </Container>
        <MyFooter brandTitle="My-React-Board" />
        <ScrollRestoration />
      </LoginContext.Provider>
    </>
  );
}

export default BoardLayout;
