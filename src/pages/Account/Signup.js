import React, { useState } from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import {
  ArrowRightCircle,
  EyeSlash,
  Eye,
  Linkedin,
} from "react-bootstrap-icons";
import Header from "../../layouts/Header";
import GoogleIconColor from "../../assets/icon/google_color.svg";

import "./Account.scss";

function Signup() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <>
      <Header state="default" />
      <Container fluid>
        <Row>
          <Col lg={4} className="pageBackground">
            <Row className="justify-content-end align-items-center h-100">
              <Col lg={9}>
                <h3 className="fw4 mb-4">
                  Welcome to
                  <br />
                  <span className="fw7">Kuidux</span>
                </h3>
                <p className="mb-4">
                  Kuidux is a new way to find freelancer, full worker or mentor.
                  We try to serving you with skilled agents from our community.
                </p>
                <Button variant="default" size="xlg">
                  See how Kuidux works <ArrowRightCircle className="ms-2" />
                </Button>
              </Col>
            </Row>
          </Col>
          <Col lg={8}>
            <Row className="justify-content-center my-5 py-5">
              <Col lg={4}>
                <h6 className="fw6">Welcome to Kuidux!</h6>
                <p className="text-lg mb-0">Sign up and connect together</p>
                <Form className="formLogin">
                  <Form.Group className="form-group" controlId="email">
                    <Form.Label className="text-lg fw5">
                      Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Your email"
                      size="lg"
                    />
                    <Form.Text className="text-color-danger text-sm d-none">
                      Error message
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="form-group" controlId="password">
                    <Form.Label className="text-lg fw5">
                      Create password
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type={passwordType}
                        onChange={handlePasswordChange}
                        value={passwordInput}
                        name="password"
                        placeholder="Create your password"
                        size="lg"
                      />
                      <InputGroup.Text>
                        <Button variant="link p-0" onClick={togglePassword}>
                          {passwordType === "password" ? <EyeSlash /> : <Eye />}
                        </Button>
                      </InputGroup.Text>
                    </InputGroup>
                    <Form.Text className="text-color-danger text-sm d-none">
                      Error message
                    </Form.Text>
                  </Form.Group>
                  <Button variant="primary btn-xlg w-100 shadow-lg mt-2">
                    Create account
                  </Button>
                  <div className="formDivider">Or</div>
                  <Button variant="white btn-xlg btn-ic-media google w-100 shadow-lg mt-2 mb-3">
                    <img src={GoogleIconColor} />
                    Create account using Google
                  </Button>
                  <Button variant="white btn-xlg btn-ic-media linkedin w-100 shadow-lg">
                    <Linkedin />
                    Create account using Linkedin
                  </Button>
                  <p className="mb-0 text-neutral-60 text-sm text-center">
                    By create account, you agree to{" "}
                    <a
                      href=""
                      target="_blank"
                      className="text-decoration-none text-color-default"
                    >
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a
                      href=""
                      target="_blank"
                      className="text-decoration-none text-color-default"
                    >
                      Privacy Policy{" "}
                    </a>
                    of Kuidux.
                  </p>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Signup;
