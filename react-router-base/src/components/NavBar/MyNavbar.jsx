import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  Modal,
  Nav,
  NavDropdown,
  Navbar,
  Form,
  Button,
  Offcanvas,
} from "react-bootstrap";
import { signUpApi, loginApi, logOutApi } from "../../lib/apis/user";
import { LoginContext } from "../../context/LoginContext";

const EXPAND_BREAKPOINT = "md";

export default function MyNavbar({ brandTitle, offCanvasTitle }) {
  const { isLogin, setLogin } = useContext(LoginContext);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const signUp = (e) => {
    e.preventDefault();

    const data = e.target.elements;
    const { email, pw } = data;

    if (pw.value !== secondPw.value) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    signUpApi(email.value, pw.value)
      .then((res) => {
        if (res.status == 201) {
          alert("회원가입 성공");
          setShowSignUpModal(false);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("회원가입 실패");
      });
  };

  const login = (e) => {
    e.preventDefault();
    const data = e.target.elements;
    const { email, pw } = data;

    loginApi(email.value, pw.value)
      .then((res) => {
        console.log(res);
        if (res.status == 201) {
          alert("로그인 성공");
          localStorage.setItem("id", res.data._id);
          setLogin(true);
          setShowLoginModal(false);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("로그인 실패");
      });
  };

  const logOut = () => {
    logOutApi()
      .then((res) => {
        if (res.status == 201) {
          localStorage.removeItem("id");
          alert("로그아웃 성공");
          setLogin(false);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("로그아웃 실패");
      });
  };

  useEffect(() => {
    if (localStorage.getItem("id")) {
      setLogin(true);
    }
  }, []);

  return (
    <Navbar
      expand={EXPAND_BREAKPOINT}
      className="mb-3"
      sticky="top"
      bg="dark"
      variant="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#">{brandTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls={`Navbar-expand-${EXPAND_BREAKPOINT}`} />
        <Navbar.Offcanvas
          id={`Navbar-expand-${EXPAND_BREAKPOINT}`}
          aria-labelledby={`NavbarLabel-expand-${EXPAND_BREAKPOINT}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`NavbarLabel-expand-${EXPAND_BREAKPOINT}`}>
              {offCanvasTitle || brandTitle}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="flex-row-reverse">
            <Nav
              className={`justify-content-around flex-row pb-4 pb-${EXPAND_BREAKPOINT}-0`}
            >
              {isLogin ? (
                <Nav.Link
                  className="flex-grow-1 text-center border border-dark border-end-0"
                  onClick={(e) => {
                    logOut();
                  }}
                >
                  로그아웃
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link
                    className="flex-grow-1 text-center border border-dark border-end-0"
                    onClick={(e) => {
                      setShowLoginModal(true);
                    }}
                  >
                    로그인
                  </Nav.Link>
                  <Nav.Link
                    className="flex-grow-1 text-center border border-dark"
                    onClick={(e) => {
                      setShowSignUpModal(true);
                    }}
                  >
                    회원가입
                  </Nav.Link>
                </>
              )}
            </Nav>
            <Nav className="justify-content-start flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">게시판</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>

      <Modal
        show={showLoginModal}
        onHide={() => {
          setShowLoginModal(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              login(e);
            }}
          >
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="pw">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal
        show={showSignUpModal}
        onHide={() => {
          setShowSignUpModal(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>signIn</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form
            onSubmit={(e) => {
              signUp(e);
            }}
          >
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="pw">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="secondPw">
              <Form.Label>ReEnter Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Navbar>
  );
}
